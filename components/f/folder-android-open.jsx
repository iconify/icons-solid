import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y8rt5bbrs.css';
import '../../css/k/kilgsnbrl.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="y8rt5bbrs"/><path class="kilgsnbrl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-android-open"} {...others} />);
}

export default Component;
