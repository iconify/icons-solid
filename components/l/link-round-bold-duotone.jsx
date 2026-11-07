import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ik_1hnawp.css';
import '../../css/f/fhqkw7bht.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ik_1hnawp"/><path class="fhqkw7bht"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:link-round-bold-duotone"} {...others} />);
}

export default Component;
