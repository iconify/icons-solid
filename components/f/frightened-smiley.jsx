import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yy3_swbuw.css';
import '../../css/j/j2lncbbhz.css';
import '../../css/h/hra751blo.css';
import '../../css/e/eflz1leej.css';
import '../../css/v/vm8rl3bog.css';
import '../../css/h/heg4cdewv.css';
import '../../css/z/z2ktjpbxd.css';
import '../../css/b/b1d3m1c6e.css';
import '../../css/i/izenlhb6x.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="yy3_swbuw"/><path class="j2lncbbhz"/><path class="hra751blo"/><path class="eflz1leej"/><path class="vm8rl3bog"/><path class="heg4cdewv"/><path class="z2ktjpbxd"/><path class="b1d3m1c6e"/><path class="izenlhb6x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:frightened-smiley"} {...others} />);
}

export default Component;
