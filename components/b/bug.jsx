import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/v/vpw5srbkd.css';
import '../../css/t/ty_pvobpe.css';
import '../../css/s/s5ge2ufpm.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="vpw5srbkd"/><path class="ty_pvobpe"/><path class="s5ge2ufpm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:bug"} {...others} />);
}

export default Component;
