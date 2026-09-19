import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p9q1n_b5d.css';
import '../../css/a/abljxkb8r.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="p9q1n_b5d"/><path class="abljxkb8r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:haskell"} {...others} />);
}

export default Component;
