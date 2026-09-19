import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/v/vtns3vj0e.css';
import '../../css/g/g1ffjqbjy.css';
import '../../css/u/u1kiawb9q.css';
import '../../css/v/v857jg0zy.css';
import '../../css/r/r9teasbvf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="vtns3vj0e"/><path class="g1ffjqbjy"/><path class="u1kiawb9q"/><path class="v857jg0zy"/><path class="r9teasbvf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:frigate"} {...others} />);
}

export default Component;
