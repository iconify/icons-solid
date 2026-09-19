import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/k/ky4zetb4b.css';
import '../../css/o/oc2jhta3x.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGhjkrxcUE"><g class="s9cl3zbei"><path class="ky4zetb4b"/><path class="oc2jhta3x"/></g></mask></defs><path mask="url(#SVGhjkrxcUE)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:medical-box"} {...others} />);
}

export default Component;
