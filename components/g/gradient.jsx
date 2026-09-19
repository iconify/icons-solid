import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zjqd8pbho.css';
import '../../css/t/tgp27vi-y.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="zjqd8pbho"/><path class="tgp27vi-y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:gradient"} {...others} />);
}

export default Component;
