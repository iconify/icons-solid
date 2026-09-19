import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wv25jylpb.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="wv25jylpb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:upload-fill-16"} {...others} />);
}

export default Component;
