import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ocs-dffle.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="ocs-dffle"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:list-ol"} {...others} />);
}

export default Component;
