import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/crs8b8bwv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="crs8b8bwv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:bulldozer"} {...others} />);
}

export default Component;
