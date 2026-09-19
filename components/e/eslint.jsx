import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lpre71u6z.css';
import '../../css/i/i19bypv0j.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="lpre71u6z"/><path class="i19bypv0j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:eslint"} {...others} />);
}

export default Component;
