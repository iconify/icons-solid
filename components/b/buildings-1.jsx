import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fjo48szol.css';
import '../../css/a/a5r52wb7q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fjo48szol"/><path class="a5r52wb7q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:buildings-1"} {...others} />);
}

export default Component;
