import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c2w8m1bts.css';
import '../../css/s/st6zf__cy.css';
import '../../css/f/fpuu3bcbf.css';
import '../../css/c/czclt8bgq.css';
import '../../css/y/yoa9wypyw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="c2w8m1bts"/><path class="st6zf__cy"/><path class="fpuu3bcbf"/><path class="czclt8bgq"/><path class="yoa9wypyw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:eye"} {...others} />);
}

export default Component;
