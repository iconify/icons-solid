import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/u/udz-79kzq.css';
import '../../css/p/pa9_zrbsc.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGIQLGgV2F"><g class="ufeehvblu"><path class="udz-79kzq"/><path class="pa9_zrbsc"/></g></mask></defs><path mask="url(#SVGIQLGgV2F)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:check-one"} {...others} />);
}

export default Component;
