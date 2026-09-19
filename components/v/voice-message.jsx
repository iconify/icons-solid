import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/arj7difgh.css';
import '../../css/x/xqlu89iqi.css';
import '../../css/s/s-3szabqp.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGqpZjXbFX"><g class="ft5dv1b6b"><path class="arj7difgh"/><path class="xqlu89iqi"/><path class="s-3szabqp"/></g></mask></defs><path mask="url(#SVGqpZjXbFX)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:voice-message"} {...others} />);
}

export default Component;
