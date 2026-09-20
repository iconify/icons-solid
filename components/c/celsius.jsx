import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m1kbdi40r.css';

const viewBox = {"width":30,"height":30};
const content = `<path class="m1kbdi40r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wi:celsius"} {...others} />);
}

export default Component;
