import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x7rd5pbsu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x7rd5pbsu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:brackets-fill"} {...others} />);
}

export default Component;
