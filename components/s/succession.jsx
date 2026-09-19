import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oe94j3tcg.css';
import '../../css/u/u-hablz3s.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="oe94j3tcg"/><path class="u-hablz3s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:succession"} {...others} />);
}

export default Component;
