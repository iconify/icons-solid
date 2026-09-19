import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/t/txhjy5bum.css';
import '../../css/j/j7b_4jb0s.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGDZvEddeV"><g class="ufeehvblu"><path class="txhjy5bum"/><path class="j7b_4jb0s"/></g></mask></defs><path mask="url(#SVGDZvEddeV)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:cones"} {...others} />);
}

export default Component;
