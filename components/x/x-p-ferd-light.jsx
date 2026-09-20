import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jpy_g2b9f.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jpy_g2b9f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:x-p-ferd-light"} {...others} />);
}

export default Component;
