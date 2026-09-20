import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mep25ehts.css';
import '../../css/s/s-xxlii2p.css';
import '../../css/s/sdejcwb5p.css';
import '../../css/y/yma-_6bft.css';
import '../../css/e/eymnq0hcq.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="mep25ehts"/><path class="s-xxlii2p"/><path class="sdejcwb5p"/><path class="yma-_6bft"/><path class="eymnq0hcq"/><g><path class="qy525jbwx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-so-tom-prncipe"} {...others} />);
}

export default Component;
