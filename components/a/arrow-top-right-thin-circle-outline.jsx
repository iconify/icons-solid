import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uw-a-7_ww.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uw-a-7_ww"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:arrow-top-right-thin-circle-outline"} {...others} />);
}

export default Component;
