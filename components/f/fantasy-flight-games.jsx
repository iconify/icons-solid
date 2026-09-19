import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/izapb2wvm.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="izapb2wvm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-brands:fantasy-flight-games"} {...others} />);
}

export default Component;
