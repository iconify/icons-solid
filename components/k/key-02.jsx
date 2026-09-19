import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/gjsr-fbei.css';
import '../../css/h/h2057acpm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="gjsr-fbei"/><path class="h2057acpm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:key-02"} {...others} />);
}

export default Component;
