import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/z2-ar1bdd.css';
import '../../css/j/jxbi3y9yw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="z2-ar1bdd"/><path class="jxbi3y9yw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:hammer"} {...others} />);
}

export default Component;
