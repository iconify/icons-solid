import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/ms7ncqbzn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ms7ncqbzn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:line-squiggle"} {...others} />);
}

export default Component;
