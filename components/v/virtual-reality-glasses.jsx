import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/icp5j9l8z.css';
import '../../css/a/ax3lcr7bz.css';
import '../../css/i/im_4qkbfu.css';
import '../../css/f/f6ry3nbeq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGGULNDcZJ"><g class="ft5dv1b6b"><path class="icp5j9l8z"/><path class="ax3lcr7bz"/><path clip-rule="evenodd" class="im_4qkbfu"/><path class="f6ry3nbeq"/></g></mask></defs><path mask="url(#SVGGULNDcZJ)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:virtual-reality-glasses"} {...others} />);
}

export default Component;
