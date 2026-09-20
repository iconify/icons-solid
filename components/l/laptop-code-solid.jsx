import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w7wp6fi0u.css';
import '../../css/y/yze9w1b-z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w7wp6fi0u"/><path class="yze9w1b-z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:laptop-code-solid"} {...others} />);
}

export default Component;
