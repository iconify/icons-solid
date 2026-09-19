import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rp2zq8b7g.css';
import '../../css/e/eziplt3ei.css';
import '../../css/n/ngzn0zb4p.css';
import '../../css/a/agt909hcp.css';
import '../../css/n/n469xpqan.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="rp2zq8b7g"/><path class="eziplt3ei"/><path class="ngzn0zb4p"/><path class="agt909hcp"/><path class="n469xpqan"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ica-2d"} {...others} />);
}

export default Component;
