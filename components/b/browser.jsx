import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b9zy-tb7n.css';
import '../../css/l/l8fxrac6r.css';
import '../../css/y/y7wfvrbko.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="b9zy-tb7n"/><rect class="l8fxrac6r"/><path class="y7wfvrbko"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:browser"} {...others} />);
}

export default Component;
