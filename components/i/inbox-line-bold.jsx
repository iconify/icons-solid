import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jbgenzzof.css';
import '../../css/f/fu36ikuad.css';
import '../../css/u/u6-7e5-on.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jbgenzzof"/><path clip-rule="evenodd" class="fu36ikuad"/><path clip-rule="evenodd" class="u6-7e5-on"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:inbox-line-bold"} {...others} />);
}

export default Component;
