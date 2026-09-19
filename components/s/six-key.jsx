import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/q/qhvovpbja.css';
import '../../css/b/bdnk3hued.css';
import '../../css/g/gzi1ffbys.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGKXDeYdWA"><g class="rohhhzb0l"><rect class="qhvovpbja"/><path class="bdnk3hued"/><path class="gzi1ffbys"/></g></mask></defs><path mask="url(#SVGKXDeYdWA)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:six-key"} {...others} />);
}

export default Component;
