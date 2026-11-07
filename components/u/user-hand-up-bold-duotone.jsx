import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ls12hhbch.css';
import '../../css/u/ugczn2boc.css';
import '../../css/j/j855t9sbc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ls12hhbch"/><path class="ugczn2boc"/><path class="j855t9sbc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:user-hand-up-bold-duotone"} {...others} />);
}

export default Component;
