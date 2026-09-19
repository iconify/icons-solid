import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/o/okuvfmhmk.css';
import '../../css/t/tvgauyb5v.css';
import '../../css/s/secmbabyc.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGREtFiUFR"><g class="s9cl3zbei"><path clip-rule="evenodd" class="okuvfmhmk"/><path class="tvgauyb5v"/><path class="secmbabyc"/></g></mask></defs><path mask="url(#SVGREtFiUFR)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:up-c"} {...others} />);
}

export default Component;
