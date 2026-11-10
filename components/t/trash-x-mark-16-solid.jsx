import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n93l26b3l.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="n93l26b3l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:trash-x-mark-16-solid"} {...others} />);
}

export default Component;
