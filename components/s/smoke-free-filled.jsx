import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z3rx-g4uw.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="z3rx-g4uw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:smoke-free-filled"} {...others} />);
}

export default Component;
