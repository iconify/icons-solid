import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dlm_yccip.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dlm_yccip"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:piggy-bank-plus"} {...others} />);
}

export default Component;
