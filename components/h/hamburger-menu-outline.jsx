import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jc5eqrbuf.css';
import '../../css/l/ld5if1xzh.css';
import '../../css/o/o6imnm4pl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jc5eqrbuf"/><path class="ld5if1xzh"/><path class="o6imnm4pl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:hamburger-menu-outline"} {...others} />);
}

export default Component;
