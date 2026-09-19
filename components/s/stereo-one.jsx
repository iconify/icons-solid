import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/x/xdqh4gbub.css';
import '../../css/l/ly55e3b8j.css';
import '../../css/j/jrsmmweqd.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGMKvT3b8Y"><g class="rohhhzb0l"><rect class="xdqh4gbub"/><path class="ly55e3b8j"/><circle class="jrsmmweqd"/></g></mask></defs><path mask="url(#SVGMKvT3b8Y)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:stereo-one"} {...others} />);
}

export default Component;
