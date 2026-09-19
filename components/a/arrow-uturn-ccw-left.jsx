import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j2x2j3ulr.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="j2x2j3ulr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:arrow-uturn-ccw-left"} {...others} />);
}

export default Component;
