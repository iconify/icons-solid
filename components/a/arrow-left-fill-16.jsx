import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ue1naxbat.css';
import '../../css/w/wwd7qgbpp.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ue1naxbat"/><path class="wwd7qgbpp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:arrow-left-fill-16"} {...others} />);
}

export default Component;
