import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y8rt5bbrs.css';
import '../../css/c/cf167rjcn.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="y8rt5bbrs"/><path class="cf167rjcn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-node-open"} {...others} />);
}

export default Component;
