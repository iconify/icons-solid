import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ylrso7y3c.css';
import '../../css/v/vkcj4bcdm.css';
import '../../css/t/tvz9grs6q.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGyMBBqcnW"><g class="ylrso7y3c"><path class="vkcj4bcdm"/><rect transform="rotate(45 24 16.929)" class="tvz9grs6q"/></g></mask></defs><path mask="url(#SVGyMBBqcnW)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:financing"} {...others} />);
}

export default Component;
