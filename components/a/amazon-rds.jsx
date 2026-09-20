import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/axkw0ac2k.css';
import '../../css/a/aytd6oskt.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="axkw0ac2k"/><path class="aytd6oskt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:amazon-rds"} {...others} />);
}

export default Component;
