import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qtzje3bum.css';
import '../../css/o/o5savzbqo.css';
import '../../css/v/vuupicbet.css';
import '../../css/g/gugq7bf4n.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGJTsiwboa"><g class="ft5dv1b6b"><rect class="qtzje3bum"/><rect class="o5savzbqo"/><circle class="vuupicbet"/><path class="gugq7bf4n"/></g></mask></defs><path mask="url(#SVGJTsiwboa)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:oven"} {...others} />);
}

export default Component;
