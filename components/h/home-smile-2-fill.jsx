import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nr1x9ib_m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nr1x9ib_m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:home-smile-2-fill"} {...others} />);
}

export default Component;
