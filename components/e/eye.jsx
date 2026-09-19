import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/shexgfo6g.css';
import '../../css/o/oin-52btw.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="shexgfo6g"/><path class="oin-52btw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:eye"} {...others} />);
}

export default Component;
