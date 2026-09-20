import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zq5sj8rvh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zq5sj8rvh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixelarticons:colors-swatch"} {...others} />);
}

export default Component;
