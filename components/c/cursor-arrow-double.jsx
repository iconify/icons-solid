import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/h/hbim2bbas.css';
import '../../css/b/bz0lhpcxr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="hbim2bbas"/><path class="bz0lhpcxr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:cursor-arrow-double"} {...others} />);
}

export default Component;
