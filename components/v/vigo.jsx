import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pqm362b6a.css';
import '../../css/d/d-4a0z9di.css';
import '../../css/x/xivpqbu3r.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG0UvZ7geU"><g class="pqm362b6a"><path class="d-4a0z9di"/><path class="xivpqbu3r"/></g></mask></defs><path mask="url(#SVG0UvZ7geU)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:vigo"} {...others} />);
}

export default Component;
