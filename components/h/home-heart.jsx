import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yorjo8b9o.css';
import '../../css/a/axer7emxn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yorjo8b9o"/><path class="axer7emxn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:home-heart"} {...others} />);
}

export default Component;
