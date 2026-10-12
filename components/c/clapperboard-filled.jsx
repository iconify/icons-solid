import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/stk6y9nje.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="stk6y9nje"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:clapperboard-filled"} {...others} />);
}

export default Component;
