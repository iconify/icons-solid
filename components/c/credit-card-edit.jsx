import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rxun0i9ht.css';
import '../../css/f/fv6-xvb7i.css';
import '../../css/c/cl91aabbd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="rxun0i9ht"/><path class="fv6-xvb7i"/><path class="cl91aabbd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:credit-card-edit"} {...others} />);
}

export default Component;
