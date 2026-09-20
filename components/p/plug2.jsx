import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hzc3-d5gx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hzc3-d5gx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:plug2"} {...others} />);
}

export default Component;
