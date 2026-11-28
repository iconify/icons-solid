import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yjotlqbyk.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jhp_8dvee.css';
import '../../css/p/poc96vbvv.css';
import '../../css/h/hmzwl423c.css';
import '../../css/z/zqvxhszyg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary yjotlqbyk"/><g class="dt0cm9dhy primary"><path class="jhp_8dvee"/><path class="poc96vbvv"/><path class="hmzwl423c"/><path class="zqvxhszyg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:cloud-sun-lightning-duo"} {...others} />);
}

export default Component;
