import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/o/o15f5z9-q.css';
import '../../css/j/jja9ehb0t.css';
import '../../css/g/gwj6-nrca.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="o15f5z9-q"/><path class="jja9ehb0t"/><path class="gwj6-nrca"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:hourglass-2"} {...others} />);
}

export default Component;
