import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/a/afpq2wb1q.css';
import '../../css/d/dqfri9bhg.css';
import '../../css/a/a0yrpdb5h.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="afpq2wb1q"/><path class="dqfri9bhg"/><path class="a0yrpdb5h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:call-hang-up"} {...others} />);
}

export default Component;
