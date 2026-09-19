import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kbrtgmd9d.css';
import '../../css/i/iuvb3zcak.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="kbrtgmd9d"/><path class="iuvb3zcak"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:mobile-request"} {...others} />);
}

export default Component;
