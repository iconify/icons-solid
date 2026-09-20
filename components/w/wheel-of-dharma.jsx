import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v6hf64byk.css';
import '../../css/q/qgf_6n_3d.css';
import '../../css/y/y6av8vbrd.css';
import '../../css/v/vo71evf5d.css';
import '../../css/w/wbhafbckj.css';
import '../../css/r/r4o6ztusd.css';
import '../../css/e/e4zfowz9r.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="v6hf64byk"><path class="qgf_6n_3d"/><path class="y6av8vbrd"/></g><path class="vo71evf5d"/><path class="wbhafbckj"/><path class="r4o6ztusd"/><path class="e4zfowz9r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:wheel-of-dharma"} {...others} />);
}

export default Component;
