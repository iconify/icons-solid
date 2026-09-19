import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/w/wr9hafbnl.css';
import '../../css/r/rjaer0dlx.css';
import '../../css/f/f8pnpzbfo.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGHl06vcSf"><g class="ufeehvblu"><path class="wr9hafbnl"/><path class="rjaer0dlx"/><path class="f8pnpzbfo"/></g></mask></defs><path mask="url(#SVGHl06vcSf)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:calculator"} {...others} />);
}

export default Component;
