import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ef4d2rb5a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ef4d2rb5a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:play-circle-solid"} {...others} />);
}

export default Component;
