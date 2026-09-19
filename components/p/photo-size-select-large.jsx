import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/acv8zdb0f.css';

const viewBox = {"width":472,"height":384};
const content = `<path class="acv8zdb0f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:photo-size-select-large"} {...others} />);
}

export default Component;
