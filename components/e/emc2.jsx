import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sc4o63boo.css';
import '../../css/m/md286fbip.css';
import '../../css/v/v1ap4y4nx.css';
import '../../css/g/gyuj_8bfe.css';
import '../../css/j/j1jb155zg.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><circle class="sc4o63boo"/><g class="md286fbip"><path class="v1ap4y4nx"/><path class="gyuj_8bfe"/><path class="j1jb155zg"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:emc2"} {...others} />);
}

export default Component;
