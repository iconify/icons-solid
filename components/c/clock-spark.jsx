import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bsh0myb_d.css';
import '../../css/f/fys3dubax.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="bsh0myb_d"/><path class="fys3dubax"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:clock-spark"} {...others} />);
}

export default Component;
