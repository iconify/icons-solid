import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/s/s6uqvybtd.css';
import '../../css/h/hoxyj3bqy.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGerbNUc4e"><g class="v3_i3wktz"><path class="s6uqvybtd"/><path class="hoxyj3bqy"/></g></mask></defs><path mask="url(#SVGerbNUc4e)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:table-file"} {...others} />);
}

export default Component;
