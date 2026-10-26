import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dqbqpubif.css';
import '../../css/j/j9a_vpb3t.css';

const viewBox = {"width":263.33,"height":173.53};
const content = `<path class="dqbqpubif"/><ellipse class="j9a_vpb3t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:rybbit-dark"} {...others} />);
}

export default Component;
