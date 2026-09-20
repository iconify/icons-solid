import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3b2z9bzs.css';
import '../../css/b/b2tyl1b2g.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="l3b2z9bzs"/><path clip-rule="evenodd" class="b2tyl1b2g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:success-16"} {...others} />);
}

export default Component;
