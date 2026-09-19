import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/a/ag041nb8r.css';
import '../../css/q/q-jxeyn0g.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGi6jqRcXl"><g class="v3_i3wktz"><rect transform="rotate(-45 9.858 29.657)" class="ag041nb8r"/><path class="q-jxeyn0g"/></g></mask></defs><path mask="url(#SVGi6jqRcXl)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:heater-resistor"} {...others} />);
}

export default Component;
