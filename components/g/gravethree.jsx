import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r0j0kqbxp.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="r0j0kqbxp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:gravethree"} {...others} />);
}

export default Component;
