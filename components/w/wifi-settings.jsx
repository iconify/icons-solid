import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/r6cnbey4s.css';
import '../../css/x/xs6jcubua.css';
import '../../css/t/tadhxrmii.css';
import '../../css/x/xb0z7dbeo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="r6cnbey4s"/><path class="xs6jcubua"/><circle transform="rotate(-90 18.8 14.28)" class="tadhxrmii"/><path class="xb0z7dbeo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:wifi-settings"} {...others} />);
}

export default Component;
