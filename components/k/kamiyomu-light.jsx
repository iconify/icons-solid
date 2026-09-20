import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p73-vbb6z.css';
import '../../css/z/z6eui5bmf.css';
import '../../css/k/k7xjikbow.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="p73-vbb6z"/><path class="z6eui5bmf"/><path class="k7xjikbow"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:kamiyomu-light"} {...others} />);
}

export default Component;
