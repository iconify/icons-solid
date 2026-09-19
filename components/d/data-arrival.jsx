import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/f/fm8ultpfb.css';
import '../../css/y/ys21accyp.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGavg38Vjf"><g class="ufeehvblu"><path clip-rule="evenodd" class="fm8ultpfb"/><path class="ys21accyp"/></g></mask></defs><path mask="url(#SVGavg38Vjf)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:data-arrival"} {...others} />);
}

export default Component;
