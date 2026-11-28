import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qpo3e-h9s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qpo3e-h9s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:copy-x"} {...others} />);
}

export default Component;
