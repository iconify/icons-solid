import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g-dmpsp-p.css';
import '../../css/e/eeukgofxq.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="g-dmpsp-p"/><path class="eeukgofxq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:layers"} {...others} />);
}

export default Component;
