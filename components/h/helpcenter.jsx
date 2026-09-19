import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iryic-bvb.css';
import '../../css/a/a0ra-m2wj.css';
import '../../css/m/m_uixnbmd.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGtPctNetI"><g class="ft5dv1b6b"><path class="iryic-bvb"/><path class="a0ra-m2wj"/><path clip-rule="evenodd" class="m_uixnbmd"/></g></mask></defs><path mask="url(#SVGtPctNetI)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:helpcenter"} {...others} />);
}

export default Component;
