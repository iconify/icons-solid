import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ki8z8ok4a.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="ki8z8ok4a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:caret-up"} {...others} />);
}

export default Component;
