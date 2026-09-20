import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jerhtqbzt.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pfqvekbaq.css';
import '../../css/a/av3m8fbrw.css';
import '../../css/k/k9xk-cb2k.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGG5WACb1u" class="jerhtqbzt"/></defs><g class="ft5dv1b6b"><use href="#SVGG5WACb1u"/><path clip-rule="evenodd" class="pfqvekbaq"/><g class="av3m8fbrw"><path clip-rule="evenodd" class="k9xk-cb2k"/><use href="#SVGG5WACb1u"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:logo-apple"} {...others} />);
}

export default Component;
