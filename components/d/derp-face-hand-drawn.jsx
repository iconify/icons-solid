import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u1630-b4j.css';
import '../../css/g/g7u0urmpu.css';
import '../../css/b/ba10csb6z.css';

const viewBox = {"width":100,"height":100};
const content = `<path clip-rule="evenodd" class="u1630-b4j"/><path clip-rule="evenodd" class="g7u0urmpu"/><path class="ba10csb6z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-memes:derp-face-hand-drawn"} {...others} />);
}

export default Component;
