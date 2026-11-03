import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bvejr9afn.css';
import '../../css/g/g7jnq5bsb.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="bvejr9afn"/><path class="g7jnq5bsb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:semanticui"} {...others} />);
}

export default Component;
