import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g-dmpsp-p.css';
import '../../css/n/n2fkhdu9u.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="g-dmpsp-p"/><path class="n2fkhdu9u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:layers-external"} {...others} />);
}

export default Component;
