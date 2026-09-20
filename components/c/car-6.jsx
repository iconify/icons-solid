import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s_g86w7hz.css';
import '../../css/v/v4k56rbwl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s_g86w7hz"/><path class="v4k56rbwl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:car-6"} {...others} />);
}

export default Component;
