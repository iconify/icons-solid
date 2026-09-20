import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/x/xq1zlz_te.css';
import '../../css/o/o8u_a_bob.css';
import '../../css/e/ewe2dqbge.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="xq1zlz_te"/><path class="o8u_a_bob"/><path class="ewe2dqbge"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:flip-vertical-arrow-2"} {...others} />);
}

export default Component;
