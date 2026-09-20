import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q_pn7accy.css';
import '../../css/c/czydtacky.css';
import '../../css/p/psskj8yuf.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="q_pn7accy"/><path class="czydtacky"/><path class="psskj8yuf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:beauty-cosmatic-lip-stick"} {...others} />);
}

export default Component;
