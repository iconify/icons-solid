import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z8kuh0bdr.css';

const viewBox = {"width":23,"height":24};
const content = `<path class="z8kuh0bdr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:visual-studio"} {...others} />);
}

export default Component;
