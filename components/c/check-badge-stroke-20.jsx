import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kqbane7zo.css';
import '../../css/v/vuoehu_3b.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="kqbane7zo"/><path class="vuoehu_3b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:check-badge-stroke-20"} {...others} />);
}

export default Component;
