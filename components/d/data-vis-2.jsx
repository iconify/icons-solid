import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a1m0pe8ss.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="a1m0pe8ss"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:data-vis-2"} {...others} />);
}

export default Component;
