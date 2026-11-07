import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hkwop1f3g.css';
import '../../css/a/a4qtkhjkv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hkwop1f3g"/><path class="a4qtkhjkv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:paperclip-rounded-2-bold-duotone"} {...others} />);
}

export default Component;
