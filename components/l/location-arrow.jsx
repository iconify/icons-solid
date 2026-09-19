import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qe5h34l0u.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="qe5h34l0u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:location-arrow"} {...others} />);
}

export default Component;
