import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y8rt5bbrs.css';
import '../../css/a/ad8jx5snz.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="y8rt5bbrs"/><path class="ad8jx5snz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-console-open"} {...others} />);
}

export default Component;
