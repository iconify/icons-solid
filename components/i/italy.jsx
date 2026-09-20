import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qnnw6covj.css';
import '../../css/i/ic3k8sg0i.css';
import '../../css/e/en8yfccur.css';
import '../../css/s/snp287xku.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="qnnw6covj"/><path class="ic3k8sg0i"/><path class="en8yfccur"/><path class="snp287xku"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:italy"} {...others} />);
}

export default Component;
