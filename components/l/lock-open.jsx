import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uahd8vp5z.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="uahd8vp5z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:lock-open"} {...others} />);
}

export default Component;
