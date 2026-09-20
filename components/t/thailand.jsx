import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pluaf6bjt.css';
import '../../css/z/zr9d5fboj.css';
import '../../css/i/iujo-ccta.css';
import '../../css/s/snp287xku.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="pluaf6bjt"/><path class="zr9d5fboj"/><path class="iujo-ccta"/><path class="snp287xku"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:thailand"} {...others} />);
}

export default Component;
