import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qaweymbez.css';
import '../../css/i/iemqaibxb.css';
import '../../css/b/bag-f3b3z.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="qaweymbez"/><path class="iemqaibxb"/><path class="bag-f3b3z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:box-expand-stroke-20"} {...others} />);
}

export default Component;
