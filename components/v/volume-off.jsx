import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cfz-e7d_t.css';

const viewBox = {"width":29,"height":24};
const content = `<path class="cfz-e7d_t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:volume-off"} {...others} />);
}

export default Component;
