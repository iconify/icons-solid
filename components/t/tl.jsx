import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jgv76kwto.css';
import '../../css/a/aspkqopjm.css';
import '../../css/i/ic329ryoo.css';
import '../../css/b/b_rwou1ju.css';

const viewBox = {"width":32,"height":24};
const content = `<g class="ft5dv1b6b"><path class="jgv76kwto"/><path clip-rule="evenodd" class="aspkqopjm"/><path clip-rule="evenodd" class="ic329ryoo"/><path clip-rule="evenodd" class="b_rwou1ju"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flagpack:tl"} {...others} />);
}

export default Component;
