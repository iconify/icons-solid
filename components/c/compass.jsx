import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fg1968b6q.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="fg1968b6q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:compass"} {...others} />);
}

export default Component;
