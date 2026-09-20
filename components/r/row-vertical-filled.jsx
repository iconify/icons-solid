import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eu68e7-kd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eu68e7-kd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:row-vertical-filled"} {...others} />);
}

export default Component;
