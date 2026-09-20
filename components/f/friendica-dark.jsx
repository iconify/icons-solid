import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qzjum0twy.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qzjum0twy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:friendica-dark"} {...others} />);
}

export default Component;
