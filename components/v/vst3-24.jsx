import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qz2wyyb3z.css';
import '../../css/b/bb4klybvd.css';
import '../../css/h/h0l49j81t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qz2wyyb3z"/><path class="bb4klybvd"/><path class="h0l49j81t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:vst3-24"} {...others} />);
}

export default Component;
