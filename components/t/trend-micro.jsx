import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zad-rl9dv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zad-rl9dv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:trend-micro"} {...others} />);
}

export default Component;
