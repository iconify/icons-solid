import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rzzqu0bjr.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="rzzqu0bjr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:sphere"} {...others} />);
}

export default Component;
