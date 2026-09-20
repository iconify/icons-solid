import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ury6c83fr.css';
import '../../css/x/x91udfb2n.css';
import '../../css/u/uereeiwkx.css';
import '../../css/n/niku9i3zl.css';
import '../../css/w/wnpw1c4cm.css';
import '../../css/s/scmvo830e.css';
import '../../css/v/vnw2pab7j.css';
import '../../css/d/dax60kygw.css';
import '../../css/r/r5r7n1yui.css';
import '../../css/s/s88b243ne.css';
import '../../css/m/miulme4xg.css';
import '../../css/w/wwq6fqn3u.css';
import '../../css/j/j17hq-b9g.css';
import '../../css/i/ia8f4tbnv.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ury6c83fr"/><path clip-rule="evenodd" class="x91udfb2n"/><path class="uereeiwkx"/><path class="niku9i3zl"/><path class="wnpw1c4cm"/><path class="scmvo830e"/><path class="vnw2pab7j"/><path class="dax60kygw"/><path class="r5r7n1yui"/><path class="s88b243ne"/><path class="miulme4xg"/><path class="wwq6fqn3u"/><path class="j17hq-b9g"/><path class="ia8f4tbnv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:mcrt"} {...others} />);
}

export default Component;
