import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c0oa-qzdz.css';
import '../../css/d/d74lauv0c.css';
import '../../css/z/z8f40li9u.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="c0oa-qzdz"/><path class="d74lauv0c"/><path class="z8f40li9u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:impeller-20-bold"} {...others} />);
}

export default Component;
