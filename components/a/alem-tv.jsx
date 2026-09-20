import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/djqqkvfyd.css';

const viewBox = {"width":145,"height":147};
const content = `<path class="djqqkvfyd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:alem-tv"} {...others} />);
}

export default Component;
