import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ylrso7y3c.css';
import '../../css/z/z1fu_mb4n.css';
import '../../css/l/lk69x9__v.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGaEhKWcti"><g class="ylrso7y3c"><path class="z1fu_mb4n"/><path class="lk69x9__v"/></g></mask></defs><path mask="url(#SVGaEhKWcti)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:crown"} {...others} />);
}

export default Component;
