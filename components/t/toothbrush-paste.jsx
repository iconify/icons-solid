import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k677mt43x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k677mt43x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:toothbrush-paste"} {...others} />);
}

export default Component;
