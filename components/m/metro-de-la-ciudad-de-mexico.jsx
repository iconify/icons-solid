import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y6cbsebpz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y6cbsebpz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:metro-de-la-ciudad-de-mexico"} {...others} />);
}

export default Component;
