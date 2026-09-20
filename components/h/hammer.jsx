import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ib08t_4oj.css';
import '../../css/e/epf28maej.css';
import '../../css/g/gg9khyk8m.css';
import '../../css/e/emqiupbaj.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="ib08t_4oj"/><path class="epf28maej"/><path class="gg9khyk8m"/><path class="emqiupbaj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:hammer"} {...others} />);
}

export default Component;
