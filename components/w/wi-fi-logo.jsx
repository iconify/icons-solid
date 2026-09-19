import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wtfmx7b3v.css';
import '../../css/w/w9di54bef.css';
import '../../css/y/yvwt00x9m.css';
import '../../css/a/aok_l9b-n.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wtfmx7b3v"><path class="w9di54bef"/><ellipse class="yvwt00x9m"/></g><path class="aok_l9b-n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:wi-fi-logo"} {...others} />);
}

export default Component;
