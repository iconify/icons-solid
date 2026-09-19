import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/v/vl47czbvy.css';
import '../../css/p/p3d6x4bxq.css';
import '../../css/o/osg-w3iku.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGFUfPSd3B"><g class="s9cl3zbei"><rect class="vl47czbvy"/><path class="p3d6x4bxq"/><rect class="osg-w3iku"/></g></mask></defs><path mask="url(#SVGFUfPSd3B)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:seo"} {...others} />);
}

export default Component;
