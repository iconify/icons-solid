import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v-v8w7bie.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v-v8w7bie"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:head-heart"} {...others} />);
}

export default Component;
