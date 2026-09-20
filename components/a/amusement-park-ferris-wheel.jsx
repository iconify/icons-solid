import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pk50-gb3e.css';
import '../../css/k/k-350gb_u.css';
import '../../css/f/fu2aarbmx.css';
import '../../css/e/enfc71bus.css';
import '../../css/y/y-s4hhrxg.css';
import '../../css/i/i2tb385mk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="pk50-gb3e"/><path class="k-350gb_u"/><path class="fu2aarbmx"/><path class="enfc71bus"/><path class="y-s4hhrxg"/><path class="i2tb385mk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:amusement-park-ferris-wheel"} {...others} />);
}

export default Component;
