import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ehlerpbsz.css';
import '../../css/f/fwo9yhojg.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ehlerpbsz"/><path class="fwo9yhojg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:garden-bench-48-bold"} {...others} />);
}

export default Component;
