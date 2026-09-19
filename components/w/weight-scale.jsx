import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bukk-sy7a.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="bukk-sy7a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-solid:weight-scale"} {...others} />);
}

export default Component;
