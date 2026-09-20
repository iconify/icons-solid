import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rvs84zvzz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rvs84zvzz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:bottle-soda-classic-outline"} {...others} />);
}

export default Component;
