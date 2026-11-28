import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fxq6cbcbq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fxq6cbcbq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:sim-card-lock"} {...others} />);
}

export default Component;
