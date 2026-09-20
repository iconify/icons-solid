import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u8r7eptda.css';
import '../../css/u/u1tsesnyu.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="u8r7eptda"/><path class="u1tsesnyu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-ci-open"} {...others} />);
}

export default Component;
