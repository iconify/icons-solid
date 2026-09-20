import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/op7cm53as.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="op7cm53as"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:contain-end"} {...others} />);
}

export default Component;
