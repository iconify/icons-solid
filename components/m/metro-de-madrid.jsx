import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c4fi4u11f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c4fi4u11f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:metro-de-madrid"} {...others} />);
}

export default Component;
