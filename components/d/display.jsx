import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/j/j6j72ac8t.css';
import '../../css/f/f28irgb8p.css';
import '../../css/m/mqge99bdl.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGBTwGNeNh"><g class="ufeehvblu"><rect class="j6j72ac8t"/><path class="f28irgb8p"/><path class="mqge99bdl"/></g></mask></defs><path mask="url(#SVGBTwGNeNh)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:display"} {...others} />);
}

export default Component;
