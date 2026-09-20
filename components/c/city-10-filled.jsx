import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vg2mv0bwm.css';
import '../../css/x/x9xdhqbvs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vg2mv0bwm"/><path class="x9xdhqbvs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:city-10-filled"} {...others} />);
}

export default Component;
