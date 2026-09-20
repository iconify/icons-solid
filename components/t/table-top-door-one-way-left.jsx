import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d68s-9ujn.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="d68s-9ujn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:table-top-door-one-way-left"} {...others} />);
}

export default Component;
