import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ytyrf4ord.css';
import '../../css/i/iyx3sgnar.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ytyrf4ord"/><path class="iyx3sgnar"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:shield-plus"} {...others} />);
}

export default Component;
