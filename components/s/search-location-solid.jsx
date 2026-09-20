import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d3y3f8jnv.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="d3y3f8jnv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:search-location-solid"} {...others} />);
}

export default Component;
