import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tay4xd-8e.css';
import '../../css/e/e4eliqbra.css';
import '../../css/e/e9_xhvbgz.css';
import '../../css/s/snp287xku.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="tay4xd-8e"/><path class="e4eliqbra"/><path class="e9_xhvbgz"/><path class="snp287xku"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:pakistan"} {...others} />);
}

export default Component;
