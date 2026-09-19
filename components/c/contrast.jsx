import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ylrso7y3c.css';
import '../../css/v/vkcj4bcdm.css';
import '../../css/e/ep3t1sbha.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGM1DSObKJ"><g class="ylrso7y3c"><path class="vkcj4bcdm"/><path class="ep3t1sbha"/></g></mask></defs><path mask="url(#SVGM1DSObKJ)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:contrast"} {...others} />);
}

export default Component;
