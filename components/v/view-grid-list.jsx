import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/g/g47cb4b4t.css';
import '../../css/r/r7egh7bcr.css';
import '../../css/d/d5cptp0zi.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGwYmErewy"><g class="ufeehvblu"><rect class="g47cb4b4t"/><path class="r7egh7bcr"/><path class="d5cptp0zi"/></g></mask></defs><path mask="url(#SVGwYmErewy)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:view-grid-list"} {...others} />);
}

export default Component;
