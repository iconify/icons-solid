import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fsi7ipshf.css';
import '../../css/p/p3hf5o7_f.css';

const viewBox = {"width":25,"height":24};
const content = `<path class="fsi7ipshf"/><path clip-rule="evenodd" class="p3hf5o7_f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:shield-dollar"} {...others} />);
}

export default Component;
