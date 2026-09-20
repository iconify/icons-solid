import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yjs0mbcre.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="yjs0mbcre"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oi:chevron-left"} {...others} />);
}

export default Component;
