import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t75_zubnw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t75_zubnw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"weui:mike2-outlined"} {...others} />);
}

export default Component;
