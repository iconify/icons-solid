import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0m25c.css';
import '../../css/b/bu0ohj.css';
import '../../css/l/l3-heb.css';
import '../../css/d/d-wzkz9p.css';
import '../../css/d/d-szjhyc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a0m25c bu0ohj"/><path class="a0m25c l3-heb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:close-to-menu-alt-transition"} {...others} />);
}

export default Component;
