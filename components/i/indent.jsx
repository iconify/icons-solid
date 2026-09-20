import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n_shecbdt.css';
import '../../css/w/wodq73bfc.css';

const viewBox = {"width":25,"height":24};
const content = `<path class="n_shecbdt"/><path clip-rule="evenodd" class="wodq73bfc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:indent"} {...others} />);
}

export default Component;
