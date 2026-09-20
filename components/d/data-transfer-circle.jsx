import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rt5pd106e.css';
import '../../css/e/evgiixb0i.css';
import '../../css/w/wntbh-cwx.css';
import '../../css/z/z_mmebh6g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="rt5pd106e"/><path class="evgiixb0i"/><path class="wntbh-cwx"/><path class="z_mmebh6g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:data-transfer-circle"} {...others} />);
}

export default Component;
