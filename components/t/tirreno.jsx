import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x4gv-v-ly.css';
import '../../css/u/uwxio7x7b.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="x4gv-v-ly"/><path class="uwxio7x7b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:tirreno"} {...others} />);
}

export default Component;
