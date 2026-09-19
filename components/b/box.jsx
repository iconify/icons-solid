import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k_ha24bwp.css';
import '../../css/r/r-45tw1ar.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k_ha24bwp"/><path class="r-45tw1ar"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:box"} {...others} />);
}

export default Component;
