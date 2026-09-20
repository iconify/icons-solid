import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j9dm_5b8b.css';
import '../../css/x/x6d1mvvmw.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="j9dm_5b8b"/><path class="x6d1mvvmw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nimbus:lightbulb"} {...others} />);
}

export default Component;
