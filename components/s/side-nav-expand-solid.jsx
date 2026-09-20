import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pcdlnom7d.css';
import '../../css/k/khw_e2oxb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pcdlnom7d"/><path class="khw_e2oxb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:side-nav-expand-solid"} {...others} />);
}

export default Component;
