import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z_zv6gb8r.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="z_zv6gb8r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:crosswalk-markings-ladder-paired"} {...others} />);
}

export default Component;
