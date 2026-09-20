import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wilx9023w.css';
import '../../css/d/dn6s-ubtl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wilx9023w"/><path class="dn6s-ubtl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:dependabot-24"} {...others} />);
}

export default Component;
