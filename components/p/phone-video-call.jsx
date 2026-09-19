import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ylrso7y3c.css';
import '../../css/b/bqhz5iotd.css';
import '../../css/o/otqgkxb6x.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGqomg1QiN"><g class="ylrso7y3c"><path class="bqhz5iotd"/><path class="otqgkxb6x"/></g></mask></defs><path mask="url(#SVGqomg1QiN)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:phone-video-call"} {...others} />);
}

export default Component;
