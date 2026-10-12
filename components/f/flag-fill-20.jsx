import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n3d0l7jvr.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="n3d0l7jvr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:flag-fill-20"} {...others} />);
}

export default Component;
