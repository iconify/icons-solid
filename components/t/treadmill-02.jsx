import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/h3mwhy3oi.css';
import '../../css/u/uzualpolm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="h3mwhy3oi"/><path class="uzualpolm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:treadmill-02"} {...others} />);
}

export default Component;
