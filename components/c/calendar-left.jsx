import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vj6ork7js.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="vj6ork7js"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:calendar-left"} {...others} />);
}

export default Component;
