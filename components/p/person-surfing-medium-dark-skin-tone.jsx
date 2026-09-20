import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f657yvg-i.css';
import '../../css/v/vf5b9zb0i.css';
import '../../css/i/i2wvy_wgy.css';
import '../../css/r/r4hn0mbcy.css';
import '../../css/x/x8poo_bjf.css';
import '../../css/d/de0_phkht.css';
import '../../css/r/r2xtw7bor.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="f657yvg-i"/><g class="vf5b9zb0i"><circle class="i2wvy_wgy"/><path class="r4hn0mbcy"/></g><g class="x8poo_bjf"><circle class="i2wvy_wgy"/><path class="de0_phkht"/><path class="r2xtw7bor"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:person-surfing-medium-dark-skin-tone"} {...others} />);
}

export default Component;
