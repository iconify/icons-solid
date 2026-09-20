import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s1_0rk7fh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s1_0rk7fh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:opentelemetry"} {...others} />);
}

export default Component;
