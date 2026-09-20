import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f95-ijf-n.css';
import '../../css/c/chh58g-wo.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="f95-ijf-n"/><path class="chh58g-wo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-audio"} {...others} />);
}

export default Component;
