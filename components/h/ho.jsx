import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/u/u0h-mhb8u.css';
import '../../css/t/tcqwic74d.css';
import '../../css/a/avztdeb9x.css';
import '../../css/u/uc45-h4xp.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="circleFlagsHo0"><circle class="bc1fd0lxe"/></mask><g mask="url(#circleFlagsHo0)"><path class="u0h-mhb8u"/><path class="tcqwic74d"/><path class="avztdeb9x"/><path class="uc45-h4xp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:ho"} {...others} />);
}

export default Component;
