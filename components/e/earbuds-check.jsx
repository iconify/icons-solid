import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jvj6dybkw.css';
import '../../css/u/uthr8pbrw.css';
import '../../css/i/i1xl_iske.css';
import '../../css/r/rb7e2jquh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="jvj6dybkw"/><path class="uthr8pbrw"/><path class="i1xl_iske"/><path class="rb7e2jquh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:earbuds-check"} {...others} />);
}

export default Component;
