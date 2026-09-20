import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/olrq7wj0g.css';
import '../../css/z/zj2c36nlr.css';
import '../../css/l/lhd9qz21x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="olrq7wj0g"/><path class="zj2c36nlr"/><path class="lhd9qz21x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:earthquake-global-seismic-wave"} {...others} />);
}

export default Component;
