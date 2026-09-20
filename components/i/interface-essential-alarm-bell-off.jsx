import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aemrh9b0w.css';
import '../../css/o/oxs71ta2o.css';
import '../../css/y/y00b9ubxh.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="aemrh9b0w"/><path class="oxs71ta2o"/><path class="y00b9ubxh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-alarm-bell-off"} {...others} />);
}

export default Component;
