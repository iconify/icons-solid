import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c1t8q-gmj.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="c1t8q-gmj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:speech-balloon-small"} {...others} />);
}

export default Component;
