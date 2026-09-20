import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y_6sc8w-h.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="y_6sc8w-h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:station-wagon-and-arrow-right-above-arrow-left"} {...others} />);
}

export default Component;
