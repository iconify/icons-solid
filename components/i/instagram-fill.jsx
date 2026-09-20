import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n9ouamk3z.css';
import '../../css/o/o5o821fyy.css';
import '../../css/u/uz6l94i4h.css';

const viewBox = {"width":64,"height":64};
const content = `<circle class="n9ouamk3z"/><path class="o5o821fyy"/><path class="uz6l94i4h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:instagram-fill"} {...others} />);
}

export default Component;
