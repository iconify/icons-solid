import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jysc-acmf.css';
import '../../css/f/flr8mw1dg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jysc-acmf"/><path class="flr8mw1dg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:html3"} {...others} />);
}

export default Component;
