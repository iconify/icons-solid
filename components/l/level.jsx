import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/r/rlycsrbwi.css';
import '../../css/p/p53aqib6l.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG8lqyRdOf"><g class="wwvp95byt"><path class="rlycsrbwi"/><path class="p53aqib6l"/></g></mask></defs><path mask="url(#SVG8lqyRdOf)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:level"} {...others} />);
}

export default Component;
