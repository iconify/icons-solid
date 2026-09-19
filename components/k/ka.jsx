import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/c/cn05-lgul.css';
import '../../css/l/ln8_9rr3g.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="circleFlagsKa0"><circle class="bc1fd0lxe"/></mask><g mask="url(#circleFlagsKa0)"><path class="cn05-lgul"/><path class="ln8_9rr3g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:ka"} {...others} />);
}

export default Component;
