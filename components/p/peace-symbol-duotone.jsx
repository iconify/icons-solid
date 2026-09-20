import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mpjt_glcl.css';
import '../../css/o/opzii1jca.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="mpjt_glcl"/><path class="opzii1jca"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:peace-symbol-duotone"} {...others} />);
}

export default Component;
