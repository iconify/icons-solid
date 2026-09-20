import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/de42aeb0l.css';
import '../../css/y/yfn2vsbhb.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="de42aeb0l"/><path clip-rule="evenodd" class="yfn2vsbhb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:gbc-solid"} {...others} />);
}

export default Component;
