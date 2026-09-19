import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x8vni4f1g.css';
import '../../css/d/dmvzikxdx.css';
import '../../css/m/md286fbip.css';
import '../../css/h/h9mxanb4g.css';
import '../../css/i/iw4abdb1c.css';
import '../../css/v/v6ygm57ke.css';
import '../../css/w/w89xt33kj.css';
import '../../css/z/z0c-1sbye.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="x8vni4f1g"/><path class="dmvzikxdx"/><g class="md286fbip"><path class="h9mxanb4g"/><path class="iw4abdb1c"/><path class="v6ygm57ke"/><path class="w89xt33kj"/></g><circle class="z0c-1sbye"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:womanshat"} {...others} />);
}

export default Component;
