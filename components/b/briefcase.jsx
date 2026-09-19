import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j1s7p1btp.css';
import '../../css/b/bkbgdy_cy.css';
import '../../css/u/uv5airb2t.css';
import '../../css/x/xgvfbubrv.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="j1s7p1btp"/><path class="bkbgdy_cy"/><path class="uv5airb2t"/><path class="xgvfbubrv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:briefcase"} {...others} />);
}

export default Component;
