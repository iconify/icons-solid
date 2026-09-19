import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rv7a7tz3y.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="rv7a7tz3y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:server-pbx-alt"} {...others} />);
}

export default Component;
