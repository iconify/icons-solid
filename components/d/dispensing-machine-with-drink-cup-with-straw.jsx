import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kex-dpb0k.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="kex-dpb0k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:dispensing-machine-with-drink-cup-with-straw"} {...others} />);
}

export default Component;
