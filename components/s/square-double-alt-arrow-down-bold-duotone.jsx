import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1bfxqbht.css';
import '../../css/y/yk7g-9jxe.css';
import '../../css/p/pr-s_8yyc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n1bfxqbht"/><path class="yk7g-9jxe"/><path class="pr-s_8yyc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:square-double-alt-arrow-down-bold-duotone"} {...others} />);
}

export default Component;
