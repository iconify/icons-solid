import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/z/zbfs8xbpm.css';
import '../../css/j/jvebuwoxn.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG7zDqYc4O"><g class="v3_i3wktz"><path class="zbfs8xbpm"/><path class="jvebuwoxn"/></g></mask></defs><path mask="url(#SVG7zDqYc4O)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:edit-two"} {...others} />);
}

export default Component;
