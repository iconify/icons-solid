import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/s/stexj9blz.css';
import '../../css/r/r6xesbc5x.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGdS2opdAL"><g class="s9cl3zbei"><rect class="stexj9blz"/><path class="r6xesbc5x"/></g></mask></defs><path mask="url(#SVGdS2opdAL)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:iphone"} {...others} />);
}

export default Component;
