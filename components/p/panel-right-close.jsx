import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/a/a_50g-srm.css';
import '../../css/l/larv589oa.css';
import '../../css/w/wwsorabjx.css';
import '../../css/c/cd5tcvbln.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="a_50g-srm wm-shadow"/><path class="larv589oa wm-shadow"/><path class="wwsorabjx"/><path class="cd5tcvbln"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:panel-right-close"} {...others} />);
}

export default Component;
