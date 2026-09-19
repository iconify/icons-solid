import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/r/r2i0scb_x.css';
import '../../css/o/oymgzybxy.css';
import '../../css/l/l5ay6cc6w.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGvIAeWcvK"><g class="ufeehvblu"><path class="r2i0scb_x"/><path class="oymgzybxy"/><path class="l5ay6cc6w"/></g></mask></defs><path mask="url(#SVGvIAeWcvK)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:notebook-one"} {...others} />);
}

export default Component;
