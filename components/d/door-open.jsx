import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cu-98sbyh.css';
import '../../css/k/kpvxz2bnb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cu-98sbyh"/><path class="kpvxz2bnb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:door-open"} {...others} />);
}

export default Component;
