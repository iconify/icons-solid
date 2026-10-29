import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pyqrm_auc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pyqrm_auc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:dollar-sign-solid"} {...others} />);
}

export default Component;
