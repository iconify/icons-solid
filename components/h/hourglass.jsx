import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eph_-e7pj.css';

const viewBox = {"width":21,"height":24};
const content = `<path class="eph_-e7pj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:hourglass"} {...others} />);
}

export default Component;
