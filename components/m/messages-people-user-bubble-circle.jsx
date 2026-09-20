import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hh03m-bva.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hh03m-bva"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:messages-people-user-bubble-circle"} {...others} />);
}

export default Component;
