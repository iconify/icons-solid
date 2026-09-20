import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/umm606kxf.css';
import '../../css/y/y7bv01bfy.css';
import '../../css/k/kboa181bg.css';
import '../../css/u/u1w7rwq1a.css';
import '../../css/m/m-is-bq-p.css';
import '../../css/l/l46uc3bec.css';
import '../../css/r/r7gh7bb6l.css';
import '../../css/o/o8gvtkb1q.css';
import '../../css/e/ef319fb7p.css';
import '../../css/s/s0o_ovbut.css';
import '../../css/u/u7gv8nbqm.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="umm606kxf"><path class="y7bv01bfy"/><path class="kboa181bg"/><path class="u1w7rwq1a"/><path class="m-is-bq-p"/><path class="l46uc3bec"/><path class="r7gh7bb6l"/><path class="o8gvtkb1q"/><path class="ef319fb7p"/><path class="s0o_ovbut"/><path class="u7gv8nbqm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:photography"} {...others} />);
}

export default Component;
