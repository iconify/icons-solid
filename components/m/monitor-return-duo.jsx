import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xhfyesugx.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/uuw1qkbsv.css';
import '../../css/g/gex1tzbfc.css';
import '../../css/s/sj304c_0m.css';
import '../../css/i/iukcc49-p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary xhfyesugx"/><g class="dt0cm9dhy primary"><path class="uuw1qkbsv"/><path class="gex1tzbfc"/><path class="sj304c_0m"/><path class="iukcc49-p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:monitor-return-duo"} {...others} />);
}

export default Component;
