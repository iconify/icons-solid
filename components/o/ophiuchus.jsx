import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dne0f28rx.css';
import '../../css/h/h749acble.css';
import '../../css/t/tlg-pta9y.css';
import '../../css/v/vo71evf5d.css';
import '../../css/i/ib1pvlupc.css';
import '../../css/j/jeihybbgn.css';
import '../../css/e/e4zfowz9r.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="dne0f28rx"><path class="h749acble"/><path class="tlg-pta9y"/></g><path class="vo71evf5d"/><path class="ib1pvlupc"/><path class="jeihybbgn"/><path class="e4zfowz9r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:ophiuchus"} {...others} />);
}

export default Component;
