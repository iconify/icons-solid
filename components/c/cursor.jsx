import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tom5xu4iv.css';

const viewBox = {"width":14,"height":24};
const content = `<path class="tom5xu4iv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:cursor"} {...others} />);
}

export default Component;
