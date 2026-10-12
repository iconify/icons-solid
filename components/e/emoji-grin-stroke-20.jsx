import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eo825-vwk.css';
import '../../css/z/zcqk8ssib.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="eo825-vwk"/><path class="zcqk8ssib"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:emoji-grin-stroke-20"} {...others} />);
}

export default Component;
