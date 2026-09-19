import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z0vm4nbxb.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="z0vm4nbxb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:circlerecordempty"} {...others} />);
}

export default Component;
