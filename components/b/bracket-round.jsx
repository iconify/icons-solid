import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cf2sv9bxh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cf2sv9bxh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:bracket-round"} {...others} />);
}

export default Component;
