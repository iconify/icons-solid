import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/adhe8v3hy.css';

const viewBox = {"width":384,"height":512};
const content = `<path class="adhe8v3hy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:prescription-bottle-alt"} {...others} />);
}

export default Component;
