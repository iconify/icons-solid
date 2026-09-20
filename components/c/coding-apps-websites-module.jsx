import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f7b-ivwtn.css';
import '../../css/c/cn0ji2cwt.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="f7b-ivwtn"/><path class="cn0ji2cwt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:coding-apps-websites-module"} {...others} />);
}

export default Component;
