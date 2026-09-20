import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j1cnlywwj.css';
import '../../css/w/w0dn1zvis.css';
import '../../css/y/yu09v8bye.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j1cnlywwj"/><path class="w0dn1zvis"/><path class="yu09v8bye"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:lock-shield-bold"} {...others} />);
}

export default Component;
