import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hk40vyc-m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hk40vyc-m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:cursor-arrow-rays"} {...others} />);
}

export default Component;
