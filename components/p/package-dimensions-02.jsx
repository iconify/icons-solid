import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/e466k-4th.css';
import '../../css/x/xbl9dtu3m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="e466k-4th"/><path class="xbl9dtu3m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:package-dimensions-02"} {...others} />);
}

export default Component;
