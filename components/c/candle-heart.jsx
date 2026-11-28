import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oxeuf6tsp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oxeuf6tsp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:candle-heart"} {...others} />);
}

export default Component;
