import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i1t_bgblg.css';
import '../../css/l/ljyjriblh.css';
import '../../css/q/qaf2rb42e.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="i1t_bgblg"/><path class="ljyjriblh"/><path class="qaf2rb42e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-switzerland"} {...others} />);
}

export default Component;
