import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/fll0uqb6i.css';
import '../../css/u/uipprnk6p.css';
import '../../css/k/kwnyzqbsp.css';
import '../../css/c/cj9sq2bnh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="fll0uqb6i"/><path class="uipprnk6p"/><path class="kwnyzqbsp"/><path class="cj9sq2bnh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:email-action-warning"} {...others} />);
}

export default Component;
