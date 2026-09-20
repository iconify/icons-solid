import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/exg9pl4_y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="exg9pl4_y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:chevron-left-circle-outline"} {...others} />);
}

export default Component;
