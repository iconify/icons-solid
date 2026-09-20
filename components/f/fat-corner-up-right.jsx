import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o0t4ebqbh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o0t4ebqbh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:fat-corner-up-right"} {...others} />);
}

export default Component;
