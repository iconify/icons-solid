import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jblp27bhe.css';
import '../../css/h/hoh3fpbcg.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="jblp27bhe"/><path class="hoh3fpbcg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bug-20"} {...others} />);
}

export default Component;
