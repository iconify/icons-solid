import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dd8l23pwp.css';
import '../../css/m/mz763296q.css';
import '../../css/k/kgp-egvzp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dd8l23pwp"/><path class="mz763296q"/><path class="kgp-egvzp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:espiral-book-duotone"} {...others} />);
}

export default Component;
