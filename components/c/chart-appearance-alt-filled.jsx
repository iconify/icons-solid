import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9e_ecbxx.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="y9e_ecbxx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:chart-appearance-alt-filled"} {...others} />);
}

export default Component;
