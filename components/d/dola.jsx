import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sf70dbbds.css';
import '../../css/r/rwk1vccqi.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="sf70dbbds"/><path class="rwk1vccqi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:dola"} {...others} />);
}

export default Component;
