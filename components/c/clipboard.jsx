import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/j/jsspaw5ps.css';
import '../../css/e/e6j8h5b3s.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGgpjYybXi"><g class="v3_i3wktz"><path class="jsspaw5ps"/><path class="e6j8h5b3s"/></g></mask></defs><path mask="url(#SVGgpjYybXi)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:clipboard"} {...others} />);
}

export default Component;
