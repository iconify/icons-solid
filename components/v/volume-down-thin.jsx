import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/a/asipl7e6a.css';
import '../../css/b/b0j8rmbql.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="asipl7e6a"/><path class="b0j8rmbql"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:volume-down-thin"} {...others} />);
}

export default Component;
