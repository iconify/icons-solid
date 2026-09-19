import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/s/sgyuadcen.css';
import '../../css/y/yokqbnb6v.css';
import '../../css/y/yonyb1bwh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="sgyuadcen"/><path class="yokqbnb6v"/><path class="yonyb1bwh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:tea"} {...others} />);
}

export default Component;
