import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h71ionbqe.css';
import '../../css/h/hg1nuab6z.css';
import '../../css/y/y2jjbolis.css';
import '../../css/b/b4uhngd6m.css';
import '../../css/x/x3lpacbyx.css';
import '../../css/e/en-dzfbwv.css';
import '../../css/x/xkynrz9-x.css';
import '../../css/k/kxld7mb5s.css';
import '../../css/m/mqblurbbt.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="h71ionbqe"/><path clip-rule="evenodd" class="hg1nuab6z"/><path clip-rule="evenodd" class="y2jjbolis"/><path class="b4uhngd6m"/><path class="x3lpacbyx"/><path class="en-dzfbwv"/><path class="xkynrz9-x"/><path clip-rule="evenodd" class="kxld7mb5s"/><path class="mqblurbbt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:rapper-pop"} {...others} />);
}

export default Component;
