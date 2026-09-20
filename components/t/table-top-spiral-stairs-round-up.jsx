import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zb521_b-x.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="zb521_b-x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:table-top-spiral-stairs-round-up"} {...others} />);
}

export default Component;
