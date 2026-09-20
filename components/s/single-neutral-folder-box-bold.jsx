import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rj6mhoj0l.css';
import '../../css/h/h693acg_w.css';
import '../../css/a/awabczrgy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rj6mhoj0l"/><path class="h693acg_w"/><path class="awabczrgy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:single-neutral-folder-box-bold"} {...others} />);
}

export default Component;
