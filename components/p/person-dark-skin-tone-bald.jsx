import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fd5t9fbnz.css';
import '../../css/a/amn_b-_3e.css';
import '../../css/q/qrwhk6b5f.css';
import '../../css/l/l4css97ah.css';
import '../../css/w/wkz0_n5gi.css';
import '../../css/q/q3aj0vory.css';

const viewBox = {"width":72,"height":72};
const content = `<ellipse class="fd5t9fbnz"/><path class="amn_b-_3e"/><path class="qrwhk6b5f"/><path class="l4css97ah"/><path class="wkz0_n5gi"/><path class="q3aj0vory"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:person-dark-skin-tone-bald"} {...others} />);
}

export default Component;
