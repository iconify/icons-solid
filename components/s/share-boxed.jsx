import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sn6csrh5o.css';
import '../../css/c/cpg14cc3z.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="sn6csrh5o"/><path class="cpg14cc3z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:share-boxed"} {...others} />);
}

export default Component;
