import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k_cb4lblb.css';

const viewBox = {"width":28,"height":24};
const content = `<path class="k_cb4lblb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:vuejs"} {...others} />);
}

export default Component;
