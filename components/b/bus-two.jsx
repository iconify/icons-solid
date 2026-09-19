import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/v/vyuj474bb.css';
import '../../css/b/b45yybqoa.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGWv9vkuFL"><g class="aql7dnt-u"><path clip-rule="evenodd" class="vyuj474bb"/><path class="b45yybqoa"/></g></mask></defs><path mask="url(#SVGWv9vkuFL)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:bus-two"} {...others} />);
}

export default Component;
