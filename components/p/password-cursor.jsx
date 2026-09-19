import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/q0q3_db9v.css';
import '../../css/z/z9_ovrbwf.css';
import '../../css/c/c7xazyb5c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="q0q3_db9v"/><path clip-rule="evenodd" class="z9_ovrbwf"/><path class="c7xazyb5c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:password-cursor"} {...others} />);
}

export default Component;
