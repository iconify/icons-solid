import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/sgfzyvn2h.css';
import '../../css/q/q9uu0nxvf.css';
import '../../css/c/clptpvbhb.css';
import '../../css/v/v4ok709ib.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="sgfzyvn2h"/><path class="q9uu0nxvf"/><path class="clptpvbhb"/><path class="v4ok709ib"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:card-tick"} {...others} />);
}

export default Component;
