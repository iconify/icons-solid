import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r-elkab4b.css';
import '../../css/a/a17nx6bfg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r-elkab4b"/><path class="a17nx6bfg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:arrow-circle-left"} {...others} />);
}

export default Component;
