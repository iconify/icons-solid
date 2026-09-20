import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m0xxf5bby.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="m0xxf5bby"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:person-jumping-on-trampoline"} {...others} />);
}

export default Component;
