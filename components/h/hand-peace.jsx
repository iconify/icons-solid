import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xyh3fv8ud.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xyh3fv8ud"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:hand-peace"} {...others} />);
}

export default Component;
