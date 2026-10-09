import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ajd3grb8j.css';
import '../../css/d/dk-jr4bqr.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ajd3grb8j"/><path class="dk-jr4bqr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:gallery-20"} {...others} />);
}

export default Component;
