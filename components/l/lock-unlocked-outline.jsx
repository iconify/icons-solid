import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u16yhsa_c.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="u16yhsa_c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:lock-unlocked-outline"} {...others} />);
}

export default Component;
