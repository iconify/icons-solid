import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/brc86cc0s.css';
import '../../css/e/epa2j5v2j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="brc86cc0s"/><path class="epa2j5v2j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:repeat-broken"} {...others} />);
}

export default Component;
