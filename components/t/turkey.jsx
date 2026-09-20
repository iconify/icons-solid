import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/relf4wlgz.css';
import '../../css/v/vlm33lmng.css';
import '../../css/s/snp287xku.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="relf4wlgz"/><path class="vlm33lmng"/><path class="snp287xku"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:turkey"} {...others} />);
}

export default Component;
