import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zad99_9ay.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zad99_9ay"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:npr-one-dark"} {...others} />);
}

export default Component;
