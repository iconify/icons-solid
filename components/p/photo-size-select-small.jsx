import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vcwojl0gm.css';

const viewBox = {"width":472,"height":384};
const content = `<path class="vcwojl0gm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:photo-size-select-small"} {...others} />);
}

export default Component;
