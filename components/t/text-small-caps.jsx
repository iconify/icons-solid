import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/acb0atomk.css';
import '../../css/g/gb7o9bbig.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="acb0atomk"/><path class="gb7o9bbig"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:text-small-caps"} {...others} />);
}

export default Component;
