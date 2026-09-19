import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/ss_nhe6tp.css';
import '../../css/t/trav0txtl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ss_nhe6tp"/><path class="trav0txtl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:at-outline"} {...others} />);
}

export default Component;
