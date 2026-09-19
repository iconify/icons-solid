import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xicmvlq6m.css';
import '../../css/r/rbg5afbtd.css';
import '../../css/h/h48i3bcrj.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="xicmvlq6m"/><path class="rbg5afbtd"/><path class="h48i3bcrj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:skip-back-outline-filled"} {...others} />);
}

export default Component;
