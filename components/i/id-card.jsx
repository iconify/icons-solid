import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/c/cyqjerbjs.css';
import '../../css/c/c24eylukh.css';
import '../../css/k/khcodvqnx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG5U0hKb5y"><g class="ufeehvblu"><path class="cyqjerbjs"/><path class="c24eylukh"/><path class="khcodvqnx"/></g></mask></defs><path mask="url(#SVG5U0hKb5y)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:id-card"} {...others} />);
}

export default Component;
