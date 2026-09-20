import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jc8eo5pxr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jc8eo5pxr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:flag-alt-2-line"} {...others} />);
}

export default Component;
