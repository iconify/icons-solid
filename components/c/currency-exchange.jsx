import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p07tmccvv.css';
import '../../css/z/zj5a0xbch.css';
import '../../css/m/mnf2ybblt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="p07tmccvv"><path class="zj5a0xbch"/><path class="mnf2ybblt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:currency-exchange"} {...others} />);
}

export default Component;
