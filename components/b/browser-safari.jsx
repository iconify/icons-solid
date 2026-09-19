import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x36h_kb1w.css';
import '../../css/a/a8_rvkruz.css';
import '../../css/u/ufkix4bpb.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGjAI5eeMX"><g class="ft5dv1b6b"><path class="x36h_kb1w"/><path class="a8_rvkruz"/><path clip-rule="evenodd" class="ufkix4bpb"/></g></mask></defs><path mask="url(#SVGjAI5eeMX)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:browser-safari"} {...others} />);
}

export default Component;
