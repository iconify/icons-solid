import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0m25c.css';
import '../../css/q/qco6qh.css';
import '../../css/j/jjaa5c.css';
import '../../css/b/bj6nwo.css';
import '../../css/j/jwh-bb.css';
import '../../css/p/p9getm.css';
import '../../css/m/mdt39h.css';
import '../../css/b/b_308z.css';
import '../../css/x/xua9zv.css';
import '../../css/s/so-from-4.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a0m25c qco6qh"/><path class="a0m25c jjaa5c"/><path class="a0m25c bj6nwo"/><path class="a0m25c jwh-bb"/><path class="a0m25c p9getm"/><path class="a0m25c mdt39h"/><path class="a0m25c b_308z"/><path class="a0m25c xua9zv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:list-indented-reversed"} {...others} />);
}

export default Component;
