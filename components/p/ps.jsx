import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/o/owy87kbwh.css';
import '../../css/s/sm8vdq4qm.css';
import '../../css/q/q9bkx5b6j.css';
import '../../css/a/a0a4fku7h.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="owy87kbwh"/><path class="sm8vdq4qm"/><path class="q9bkx5b6j"/><path class="a0a4fku7h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:ps"} {...others} />);
}

export default Component;
