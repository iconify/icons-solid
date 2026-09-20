import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/snxz6qb1l.css';
import '../../css/n/nix-n4bpo.css';
import '../../css/j/jumcysgyz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="snxz6qb1l"/><path class="nix-n4bpo"/><path class="jumcysgyz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:time-clock-fire"} {...others} />);
}

export default Component;
