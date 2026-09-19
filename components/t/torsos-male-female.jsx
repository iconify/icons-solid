import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ofrrycbzm.css';
import '../../css/a/amz2rhbpg.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="ofrrycbzm"/><path class="amz2rhbpg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:torsos-male-female"} {...others} />);
}

export default Component;
