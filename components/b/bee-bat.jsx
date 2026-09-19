import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sj807wb-b.css';
import '../../css/t/t8ed8cb_k.css';
import '../../css/u/uw_-t08lz.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="sj807wb-b"/><circle class="t8ed8cb_k"/><path class="uw_-t08lz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:bee-bat"} {...others} />);
}

export default Component;
