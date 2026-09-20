import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/o/o98v_25uz.css';
import '../../css/q/qk4nqgb7x.css';
import '../../css/l/lwa-rvbps.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="o98v_25uz"/><path class="qk4nqgb7x"/><path class="lwa-rvbps"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:folder-open"} {...others} />);
}

export default Component;
