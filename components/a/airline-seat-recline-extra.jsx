import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c5xw7my_t.css';

const viewBox = {"width":432,"height":408};
const content = `<path class="c5xw7my_t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:airline-seat-recline-extra"} {...others} />);
}

export default Component;
