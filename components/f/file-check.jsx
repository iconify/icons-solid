import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7rnv2w-u.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="j7rnv2w-u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:file-check"} {...others} />);
}

export default Component;
