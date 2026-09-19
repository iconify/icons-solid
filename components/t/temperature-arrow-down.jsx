import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q1edp2nss.css';

const viewBox = {"width":576,"height":512};
const content = `<path class="q1edp2nss"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:temperature-arrow-down"} {...others} />);
}

export default Component;
