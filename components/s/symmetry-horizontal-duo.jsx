import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m5uw6ab1l.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/okoh6nbnl.css';
import '../../css/e/egk2kv01d.css';
import '../../css/o/ormhxpb2x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m5uw6ab1l secondary"/><g class="dt0cm9dhy primary"><path class="okoh6nbnl"/><path class="egk2kv01d"/><path class="ormhxpb2x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:symmetry-horizontal-duo"} {...others} />);
}

export default Component;
