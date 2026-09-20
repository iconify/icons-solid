import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/skuz2sbgy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="skuz2sbgy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:fit-to-page-outline"} {...others} />);
}

export default Component;
