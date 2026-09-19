import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kw7wwe3lc.css';
import '../../css/o/ovk3-rb6p.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="kw7wwe3lc"/><path class="ovk3-rb6p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"entypo:creative-commons-remix"} {...others} />);
}

export default Component;
