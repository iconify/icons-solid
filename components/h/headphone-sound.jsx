import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h5v6uobzb.css';
import '../../css/e/ewi85glah.css';
import '../../css/f/frzjyvvrk.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGERWYaeKe"><g class="ft5dv1b6b"><path class="h5v6uobzb"/><path class="ewi85glah"/><path class="frzjyvvrk"/></g></mask></defs><path mask="url(#SVGERWYaeKe)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:headphone-sound"} {...others} />);
}

export default Component;
