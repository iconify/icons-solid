import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/udtx5jbky.css';
import '../../css/t/t134q6seg.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="udtx5jbky"/><path class="t134q6seg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:phone-block-filled"} {...others} />);
}

export default Component;
