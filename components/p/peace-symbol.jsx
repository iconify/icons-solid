import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mpjt_glcl.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="mpjt_glcl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:peace-symbol"} {...others} />);
}

export default Component;
