import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hkwnyu5zy.css';
import '../../css/o/onqnis1mn.css';
import '../../css/h/h6hpqtbrt.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="hkwnyu5zy"/><path class="onqnis1mn"/><path class="h6hpqtbrt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:mobile-view-orientation"} {...others} />);
}

export default Component;
