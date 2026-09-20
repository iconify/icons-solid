import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yk_n9jbrh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yk_n9jbrh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:remote-control-fill"} {...others} />);
}

export default Component;
