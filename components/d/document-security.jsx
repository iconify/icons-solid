import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b-v_r1sov.css';
import '../../css/k/k2n9vabow.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="b-v_r1sov"/><path class="k2n9vabow"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:document-security"} {...others} />);
}

export default Component;
