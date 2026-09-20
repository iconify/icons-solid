import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vbmu2dbxv.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="vbmu2dbxv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:linejoin-round-outline"} {...others} />);
}

export default Component;
