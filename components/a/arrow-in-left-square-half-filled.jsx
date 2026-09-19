import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ooaqbg7av.css';
import '../../css/l/l3bwhaczb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ooaqbg7av"/><path class="l3bwhaczb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:arrow-in-left-square-half-filled"} {...others} />);
}

export default Component;
