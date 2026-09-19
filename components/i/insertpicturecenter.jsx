import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c8ipqhb2a.css';

const viewBox = {"width":1025,"height":960};
const content = `<path class="c8ipqhb2a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:insertpicturecenter"} {...others} />);
}

export default Component;
