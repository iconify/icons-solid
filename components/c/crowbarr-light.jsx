import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lt5h2-4uq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lt5h2-4uq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:crowbarr-light"} {...others} />);
}

export default Component;
