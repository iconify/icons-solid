import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/x/xi8f7-cfb.css';
import '../../css/y/y8j_hsb4g.css';
import '../../css/m/mbpirf25d.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="circleFlagsFa0"><circle class="bc1fd0lxe"/></mask><g mask="url(#circleFlagsFa0)"><path class="xi8f7-cfb"/><path class="y8j_hsb4g"/><path class="mbpirf25d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:fa"} {...others} />);
}

export default Component;
