import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ojx85m3io.css';
import '../../css/l/lj2fxh0vl.css';
import '../../css/z/z82nuqbtt.css';
import '../../css/h/htv6lo28z.css';
import '../../css/t/tw5-e4kyi.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ojx85m3io"/><path class="lj2fxh0vl"/><path class="z82nuqbtt"/><path class="htv6lo28z"/><path class="tw5-e4kyi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:h2-molecule-20-bold"} {...others} />);
}

export default Component;
