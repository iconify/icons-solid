import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/m/mea1p26cj.css';
import '../../css/h/hhgq12wfv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="mea1p26cj"/><path class="hhgq12wfv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:add-double"} {...others} />);
}

export default Component;
