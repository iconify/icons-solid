import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h4qou-b1e.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="h4qou-b1e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:face-robot"} {...others} />);
}

export default Component;
