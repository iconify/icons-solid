import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/xh7p-_tmw.css';
import '../../css/s/smlt2l86m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="xh7p-_tmw"/><path class="smlt2l86m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:printer-off"} {...others} />);
}

export default Component;
