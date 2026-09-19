import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qctaksagg.css';
import '../../css/w/wzczkxivh.css';

const viewBox = {"width":24,"height":24};
const content = `<rect class="qctaksagg"/><path class="wzczkxivh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:screen-light-filled"} {...others} />);
}

export default Component;
