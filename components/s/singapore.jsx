import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pluaf6bjt.css';
import '../../css/d/db694ug1y.css';
import '../../css/k/k8u0_tjfc.css';
import '../../css/s/snp287xku.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="pluaf6bjt"/><path class="db694ug1y"/><path class="k8u0_tjfc"/><path class="snp287xku"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:singapore"} {...others} />);
}

export default Component;
