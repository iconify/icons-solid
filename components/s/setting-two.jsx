import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/h/h1s4q_nxt.css';
import '../../css/v/vldudygfx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGAM6pX7oM"><g class="ufeehvblu"><path class="h1s4q_nxt"/><path class="vldudygfx"/></g></mask></defs><path mask="url(#SVGAM6pX7oM)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:setting-two"} {...others} />);
}

export default Component;
