import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q-0iu1ivl.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="q-0iu1ivl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:database-rabbit"} {...others} />);
}

export default Component;
