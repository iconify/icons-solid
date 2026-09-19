import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0dsgpb_o.css';

const viewBox = {"width":1792,"height":1696};
const content = `<path class="a0dsgpb_o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:reddit-alien"} {...others} />);
}

export default Component;
