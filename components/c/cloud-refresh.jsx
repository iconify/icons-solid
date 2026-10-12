import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jfzh94b8z.css';
import '../../css/a/a-jdjk9ia.css';
import '../../css/j/jzbwfackt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="jfzh94b8z"/><path class="a-jdjk9ia"/><path class="jzbwfackt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:cloud-refresh"} {...others} />);
}

export default Component;
