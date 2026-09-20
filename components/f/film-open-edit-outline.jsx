import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o3d5edgbz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o3d5edgbz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:film-open-edit-outline"} {...others} />);
}

export default Component;
