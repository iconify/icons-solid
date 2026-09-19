import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/o/o_9uvrmvu.css';
import '../../css/l/lp9xhlbuq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG9K7TFbOT"><g class="wwvp95byt"><path class="o_9uvrmvu"/><path class="lp9xhlbuq"/></g></mask></defs><path mask="url(#SVG9K7TFbOT)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:micro-sd"} {...others} />);
}

export default Component;
