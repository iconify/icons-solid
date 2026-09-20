import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qm2q14o2t.css';
import '../../css/c/czb5--bqu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qm2q14o2t"/><path class="czb5--bqu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:contao"} {...others} />);
}

export default Component;
