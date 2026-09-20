import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vq5iey98t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vq5iey98t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:trello-fill"} {...others} />);
}

export default Component;
