import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v6hf64byk.css';
import '../../css/u/uegb3ib0m.css';
import '../../css/y/yb3nt2ffe.css';
import '../../css/s/s4_t74zji.css';
import '../../css/h/hdp56ds8d.css';
import '../../css/t/tb5yn6lrl.css';
import '../../css/y/ys7h0nbie.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="v6hf64byk"><path class="uegb3ib0m"/><circle class="yb3nt2ffe"/></g><path class="s4_t74zji"/><path class="hdp56ds8d"/><circle class="tb5yn6lrl"/><path class="ys7h0nbie"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:leo"} {...others} />);
}

export default Component;
