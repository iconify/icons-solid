import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gxyj4qh4a.css';
import '../../css/y/yf8qjjb0l.css';
import '../../css/x/x866q4u2i.css';
import '../../css/n/nw7ww5lwl.css';
import '../../css/e/eqhzn-nhp.css';
import '../../css/g/gnvs0kbuh.css';
import '../../css/h/hui5nqbvd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="gxyj4qh4a"/><circle class="yf8qjjb0l"/><circle class="x866q4u2i"/><path class="nw7ww5lwl"/><circle class="eqhzn-nhp"/><circle class="gnvs0kbuh"/><circle class="hui5nqbvd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:git-branches"} {...others} />);
}

export default Component;
