import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bak9dbcyq.css';

const viewBox = {"width":507,"height":512};
const content = `<path class="bak9dbcyq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:microsoft-outlook"} {...others} />);
}

export default Component;
