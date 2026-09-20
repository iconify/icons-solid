import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jzicu7o9n.css';
import '../../css/a/aflrv12xp.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="jzicu7o9n"/><path class="aflrv12xp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-examples-open"} {...others} />);
}

export default Component;
