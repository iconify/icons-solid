import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e50c8gb5g.css';
import '../../css/u/ut5kjkb9c.css';
import '../../css/m/mry1nj2og.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e50c8gb5g"/><path class="ut5kjkb9c"/><path class="mry1nj2og"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:binary-authorization"} {...others} />);
}

export default Component;
