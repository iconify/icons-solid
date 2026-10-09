import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/umoge2bql.css';
import '../../css/l/lex5nub6o.css';
import '../../css/f/fp-kn4xoc.css';
import '../../css/w/wvq9wacvk.css';
import '../../css/b/ba4bo3btf.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="umoge2bql"/><path class="lex5nub6o"/><path class="fp-kn4xoc"/><path class="wvq9wacvk"/><path class="ba4bo3btf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:energy-flow-48-bold"} {...others} />);
}

export default Component;
