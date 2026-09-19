import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z_z58vwaq.css';
import '../../css/y/yqq7mwbip.css';
import '../../css/y/y658z3bch.css';
import '../../css/p/p0039-bag.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="z_z58vwaq"/><path class="yqq7mwbip"/><path class="y658z3bch"/><path class="p0039-bag"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:skate"} {...others} />);
}

export default Component;
