import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iav7fpb4d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iav7fpb4d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:gradle-play-publisher"} {...others} />);
}

export default Component;
