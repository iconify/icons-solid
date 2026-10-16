import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j1cbt0mon.css';
import '../../css/f/fx-nsmbzv.css';
import '../../css/l/lnppjcb1v.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="j1cbt0mon"/><path class="fx-nsmbzv"/><path class="lnppjcb1v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:check-valve-20"} {...others} />);
}

export default Component;
