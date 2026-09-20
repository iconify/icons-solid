import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bg_5v1b-x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bg_5v1b-x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:home-gear-fill"} {...others} />);
}

export default Component;
