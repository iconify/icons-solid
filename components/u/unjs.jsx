import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tzb3omb7i.css';
import '../../css/x/x9dxbgztj.css';

const viewBox = {"width":60,"height":60};
const content = `<path class="tzb3omb7i"/><path class="x9dxbgztj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:unjs"} {...others} />);
}

export default Component;
