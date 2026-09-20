import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wd3mqx2ep.css';
import '../../css/s/szghgl-0e.css';
import '../../css/s/sp8ko-bub.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wd3mqx2ep"/><path class="szghgl-0e"/><path class="sp8ko-bub"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:openapi-light"} {...others} />);
}

export default Component;
