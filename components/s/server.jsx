import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pi9a0sbaf.css';
import '../../css/t/tvgk8qbnj.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGjOJgrbjt"><g class="ft5dv1b6b"><path class="pi9a0sbaf"/><path class="tvgk8qbnj"/></g></mask></defs><path mask="url(#SVGjOJgrbjt)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:server"} {...others} />);
}

export default Component;
