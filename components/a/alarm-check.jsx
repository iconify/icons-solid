import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hh0qlyhsu.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="hh0qlyhsu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:alarm-check"} {...others} />);
}

export default Component;
