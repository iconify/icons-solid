import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e8lng_b0e.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="e8lng_b0e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:graduation-cap"} {...others} />);
}

export default Component;
