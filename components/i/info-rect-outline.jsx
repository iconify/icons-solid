import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c-iiisbix.css';
import '../../css/b/brwrshb8o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c-iiisbix"/><path clip-rule="evenodd" class="brwrshb8o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:info-rect-outline"} {...others} />);
}

export default Component;
