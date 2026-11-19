import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/khnqrjkad.css';
import '../../css/u/ukv9p-tgw.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="khnqrjkad"/><path class="ukv9p-tgw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:mongodb-wordmark"} {...others} />);
}

export default Component;
