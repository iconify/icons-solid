import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rgf3yzrlx.css';
import '../../css/q/qik6ntukn.css';
import '../../css/f/fa2bfw9ww.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGHBJZ6dmx"><g class="ft5dv1b6b"><circle class="rgf3yzrlx"/><path class="qik6ntukn"/><path class="fa2bfw9ww"/></g></mask></defs><path mask="url(#SVGHBJZ6dmx)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:copyright"} {...others} />);
}

export default Component;
