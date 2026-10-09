import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gn86vr-5u.css';
import '../../css/h/hjs-1h8-e.css';
import '../../css/v/v4b84_btw.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="gn86vr-5u"/><path class="hjs-1h8-e"/><path class="v4b84_btw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:offset-48-bold"} {...others} />);
}

export default Component;
