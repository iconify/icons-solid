import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hpa_lkb0t.css';
import '../../css/z/zdz2_wbky.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hpa_lkb0t"/><path class="zdz2_wbky"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:people-group-light"} {...others} />);
}

export default Component;
