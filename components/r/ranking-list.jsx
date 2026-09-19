import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/c/cyqjerbjs.css';
import '../../css/b/bztzw5bin.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGnDF6vd6S"><g class="s9cl3zbei"><path class="cyqjerbjs"/><path class="bztzw5bin"/></g></mask></defs><path mask="url(#SVGnDF6vd6S)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:ranking-list"} {...others} />);
}

export default Component;
