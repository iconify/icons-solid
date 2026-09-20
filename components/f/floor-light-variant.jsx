import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z5-n9-bgf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z5-n9-bgf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:floor-light-variant"} {...others} />);
}

export default Component;
