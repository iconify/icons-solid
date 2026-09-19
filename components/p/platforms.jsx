import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q92ghub-h.css';
import '../../css/k/kmch1fxsn.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="q92ghub-h"/><path class="kmch1fxsn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:platforms"} {...others} />);
}

export default Component;
