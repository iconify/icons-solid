import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t48mlfbhe.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="t48mlfbhe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:arrow-chevron-down"} {...others} />);
}

export default Component;
