import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sk1ji3fyx.css';
import '../../css/v/v4puv_b2i.css';
import '../../css/i/iwp2c6aew.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="sk1ji3fyx"/><path class="v4puv_b2i"/><path clip-rule="evenodd" class="iwp2c6aew"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:sliders-h-duotone"} {...others} />);
}

export default Component;
