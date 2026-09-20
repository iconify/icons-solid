import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dmq9vpghv.css';
import '../../css/t/twk1xgb_t.css';
import '../../css/t/t6s89ibas.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dmq9vpghv"><path clip-rule="evenodd" class="twk1xgb_t"/><path class="t6s89ibas"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:lynx"} {...others} />);
}

export default Component;
