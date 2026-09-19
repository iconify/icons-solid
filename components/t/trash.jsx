import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hqc3k61jp.css';
import '../../css/z/z4lv28bay.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hqc3k61jp"/><path class="z4lv28bay"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:trash"} {...others} />);
}

export default Component;
