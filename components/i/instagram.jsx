import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h8xyuzbbe.css';
import '../../css/n/nha8y7oaq.css';
import '../../css/m/mp4ag1boz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGy4YSvdBO"><g class="ft5dv1b6b"><path class="h8xyuzbbe"/><path class="nha8y7oaq"/><path class="mp4ag1boz"/></g></mask></defs><path mask="url(#SVGy4YSvdBO)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:instagram"} {...others} />);
}

export default Component;
