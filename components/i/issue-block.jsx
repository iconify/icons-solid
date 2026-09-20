import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e-lmltbuu.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="e-lmltbuu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:issue-block"} {...others} />);
}

export default Component;
