import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xicmvlq6m.css';
import '../../css/x/xh_evphpu.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="xicmvlq6m"/><path class="xh_evphpu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:skip-back-solid-filled"} {...others} />);
}

export default Component;
