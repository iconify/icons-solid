import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/c/ctq6evbba.css';
import '../../css/l/lh_zh7biy.css';
import '../../css/f/fri595bxy.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGl0YEsefU"><g class="ufeehvblu"><path class="ctq6evbba"/><path class="lh_zh7biy"/><path class="fri595bxy"/></g></mask></defs><path mask="url(#SVGl0YEsefU)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:mail"} {...others} />);
}

export default Component;
