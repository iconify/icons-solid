import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r_da3ubjp.css';
import '../../css/z/znrl4yb1y.css';
import '../../css/o/of9kz4-jf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="r_da3ubjp"><path class="znrl4yb1y"/><path class="of9kz4-jf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:mercurial"} {...others} />);
}

export default Component;
