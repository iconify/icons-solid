import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nlh45eb9v.css';
import '../../css/n/n-jag4bns.css';
import '../../css/i/icv5gjquf.css';
import '../../css/a/acm0z_bik.css';
import '../../css/s/snp287xku.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="nlh45eb9v"/><path class="n-jag4bns"/><path class="icv5gjquf"/><path class="acm0z_bik"/><path class="snp287xku"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:syria"} {...others} />);
}

export default Component;
