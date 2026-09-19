import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/sh109qbsn.css';
import '../../css/p/plqbuub9g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="sh109qbsn"/><path class="plqbuub9g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:weight"} {...others} />);
}

export default Component;
