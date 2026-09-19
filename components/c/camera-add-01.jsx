import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/nixbvpbpf.css';
import '../../css/d/dhf1elbus.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="nixbvpbpf"/><path class="dhf1elbus"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:camera-add-01"} {...others} />);
}

export default Component;
