import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n10napp6q.css';
import '../../css/z/zi-9qcbti.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="n10napp6q"/><path class="zi-9qcbti"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:block-storage"} {...others} />);
}

export default Component;
