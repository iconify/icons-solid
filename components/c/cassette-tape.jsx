import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ukyr80b4m.css';
import '../../css/z/zbs1n8-tz.css';
import '../../css/y/yynvv2qce.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ukyr80b4m"/><path class="zbs1n8-tz"/><path class="yynvv2qce"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:cassette-tape"} {...others} />);
}

export default Component;
