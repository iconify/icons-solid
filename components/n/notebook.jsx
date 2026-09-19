import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/j/jukluw79g.css';
import '../../css/w/w1wv4tb9z.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGeFs1icgk"><g class="v3_i3wktz"><path class="jukluw79g"/><path class="w1wv4tb9z"/></g></mask></defs><path mask="url(#SVGeFs1icgk)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:notebook"} {...others} />);
}

export default Component;
