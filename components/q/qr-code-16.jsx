import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ka828nvzs.css';
import '../../css/o/o292irb5l.css';
import '../../css/x/xlp4lif3y.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ka828nvzs"/><path clip-rule="evenodd" class="o292irb5l"/><path class="xlp4lif3y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:qr-code-16"} {...others} />);
}

export default Component;
