import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/q/qixp1lbnf.css';
import '../../css/f/fic7ufbru.css';
import '../../css/y/y-6hrkbuj.css';
import '../../css/s/sx82wswwc.css';
import '../../css/d/d6rcm1bot.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGICZWIcaL"><g class="ufeehvblu"><path class="qixp1lbnf"/><path class="fic7ufbru"/><path class="y-6hrkbuj"/><path class="sx82wswwc"/><path class="d6rcm1bot"/></g></mask></defs><path mask="url(#SVGICZWIcaL)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:workbench"} {...others} />);
}

export default Component;
