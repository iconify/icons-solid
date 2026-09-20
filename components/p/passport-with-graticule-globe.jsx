import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mdf_24b_u.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="mdf_24b_u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:passport-with-graticule-globe"} {...others} />);
}

export default Component;
