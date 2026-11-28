import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ogd--ab7n.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/mbini9b6h.css';
import '../../css/b/b9zxt3bwp.css';
import '../../css/y/y8ul2mg1f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ogd--ab7n secondary"/><g class="dt0cm9dhy primary"><path class="mbini9b6h"/><path class="b9zxt3bwp"/><path class="y8ul2mg1f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:chart-radar-duo"} {...others} />);
}

export default Component;
