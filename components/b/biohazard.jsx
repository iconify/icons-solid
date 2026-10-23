import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wowm9d2iz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wowm9d2iz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:biohazard"} {...others} />);
}

export default Component;
