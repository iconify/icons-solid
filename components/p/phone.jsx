import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/u/ujed1zb_y.css';
import '../../css/w/wwxsycqox.css';
import '../../css/o/os5lo5ptn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><path class="ujed1zb_y"/><path class="wwxsycqox"/><path class="os5lo5ptn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:phone"} {...others} />);
}

export default Component;
