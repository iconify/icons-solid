import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/snp287xku.css';
import '../../css/p/pp8nmdb7j.css';
import '../../css/k/k5loyzbkf.css';
import '../../css/w/w5u46jbvk.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="snp287xku"/><path class="pp8nmdb7j"/><path class="k5loyzbkf"/><path class="w5u46jbvk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:diamond-suit"} {...others} />);
}

export default Component;
