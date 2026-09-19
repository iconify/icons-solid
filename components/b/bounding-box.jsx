import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/l2o8ygvbn.css';
import '../../css/y/ya6370b_w.css';
import '../../css/q/q6v1kxb4c.css';
import '../../css/n/npzbi206w.css';
import '../../css/h/h_tsn8bxt.css';
import '../../css/v/v9vljob2t.css';
import '../../css/s/swsab_86e.css';
import '../../css/o/o1u583b9p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="l2o8ygvbn"/><circle class="ya6370b_w"/><circle class="q6v1kxb4c"/><circle class="npzbi206w"/><circle class="h_tsn8bxt"/><circle class="v9vljob2t"/><circle class="swsab_86e"/><circle class="o1u583b9p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:bounding-box"} {...others} />);
}

export default Component;
