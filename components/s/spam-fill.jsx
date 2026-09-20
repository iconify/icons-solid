import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y-tu_s2fd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y-tu_s2fd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:spam-fill"} {...others} />);
}

export default Component;
