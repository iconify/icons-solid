import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/xbiz7tboo.css';
import '../../css/f/f4c4xtbbq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><circle class="xbiz7tboo"/><path class="f4c4xtbbq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:at"} {...others} />);
}

export default Component;
