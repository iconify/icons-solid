import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/ba4wh6eoj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ba4wh6eoj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxl:neon-tech"} {...others} />);
}

export default Component;
