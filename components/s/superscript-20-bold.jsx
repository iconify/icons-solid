import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a4q8gybuy.css';
import '../../css/p/pl0eixign.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="a4q8gybuy"/><path class="pl0eixign"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:superscript-20-bold"} {...others} />);
}

export default Component;
