import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/afo9gwbys.css';
import '../../css/j/jl6es7t-m.css';
import '../../css/c/c9zpqgb5p.css';
import '../../css/v/v_p95zaqq.css';
import '../../css/k/kubia1bdp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="afo9gwbys"/><path class="jl6es7t-m"/><path class="c9zpqgb5p"/><path class="v_p95zaqq"/><path class="kubia1bdp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:store-location"} {...others} />);
}

export default Component;
