import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l6_kf7bqk.css';
import '../../css/u/u86f3_xou.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="l6_kf7bqk"/><path class="u86f3_xou"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-moon"} {...others} />);
}

export default Component;
