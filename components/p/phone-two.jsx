import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fux8zqblx.css';
import '../../css/y/y_s78u09s.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGMSEeubUA"><g class="ft5dv1b6b"><path class="fux8zqblx"/><path class="y_s78u09s"/></g></mask></defs><path mask="url(#SVGMSEeubUA)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:phone-two"} {...others} />);
}

export default Component;
