import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/haf1n5bdl.css';
import '../../css/i/i6jfppbkv.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="haf1n5bdl"/><path class="i6jfppbkv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-fastlane-open"} {...others} />);
}

export default Component;
