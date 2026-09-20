import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e5n7i0b6v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e5n7i0b6v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:steam-fill"} {...others} />);
}

export default Component;
