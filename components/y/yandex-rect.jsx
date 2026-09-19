import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w4ozfu2_y.css';

const viewBox = {"width":1000,"height":1000};
const content = `<path class="w4ozfu2_y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"brandico:yandex-rect"} {...others} />);
}

export default Component;
