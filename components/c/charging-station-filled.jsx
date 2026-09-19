import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gu6inrb8q.css';
import '../../css/o/o4p12ib8x.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="gu6inrb8q"/><path class="o4p12ib8x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:charging-station-filled"} {...others} />);
}

export default Component;
