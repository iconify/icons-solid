import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/etcjt1s5b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="etcjt1s5b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:football-helmet"} {...others} />);
}

export default Component;
