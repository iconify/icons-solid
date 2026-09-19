import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oxlaslbqv.css';
import '../../css/f/f-sg0db9s.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="oxlaslbqv"/><path class="f-sg0db9s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:repo-artifact"} {...others} />);
}

export default Component;
