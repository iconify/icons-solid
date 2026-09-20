import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jgzs6hb4p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jgzs6hb4p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:bell-plus-outline"} {...others} />);
}

export default Component;
