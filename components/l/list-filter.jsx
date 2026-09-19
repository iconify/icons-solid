import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/poaev4p8i.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="poaev4p8i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:list-filter"} {...others} />);
}

export default Component;
