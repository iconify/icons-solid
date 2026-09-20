import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0m25c.css';
import '../../css/g/gp600p.css';
import '../../css/b/b4_xlz.css';
import '../../css/f/f2pddx.css';
import '../../css/d/d-ash02h.css';
import '../../css/t/tr-2c6-rw.css';
import '../../css/f/fade-to-1.css';
import '../../css/d/d-9_o5mj.css';
import '../../css/d/d-s9ijad.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a0m25c gp600p"/><path class="a0m25c b4_xlz"/><path class="a0m25c f2pddx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:sun-rising-loop"} {...others} />);
}

export default Component;
