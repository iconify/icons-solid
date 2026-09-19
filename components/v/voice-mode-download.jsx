import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k7pmrub2v.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="k7pmrub2v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:voice-mode-download"} {...others} />);
}

export default Component;
