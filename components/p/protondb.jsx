import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hjvpp3bga.css';
import '../../css/d/dslthebzv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hjvpp3bga"/><circle class="dslthebzv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:protondb"} {...others} />);
}

export default Component;
