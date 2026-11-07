import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h21hmgjli.css';
import '../../css/e/esqvhtbwf.css';
import '../../css/o/o9my5dbhw.css';
import '../../css/x/xr17mbc7i.css';
import '../../css/m/m3ri2hldy.css';
import '../../css/m/m92kipbfc.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/f/fs9xhv4yq.css';
import '../../css/z/z6hnwh2qw.css';
import '../../css/b/bgswpdbnx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h21hmgjli"/><path class="esqvhtbwf"/><path class="o9my5dbhw"/><path class="xr17mbc7i"/><path class="m3ri2hldy"/><path class="m92kipbfc"/><g class="xtpeb-edw"><path class="fs9xhv4yq"/><path class="z6hnwh2qw"/><path class="bgswpdbnx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sunrise-bold-duotone"} {...others} />);
}

export default Component;
