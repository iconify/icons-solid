import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/ze91ugbtv.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="ze91ugbtv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:pixel-ape-face-with-eye-patch"} {...others} />);
}

export default Component;
