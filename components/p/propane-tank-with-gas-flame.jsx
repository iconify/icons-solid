import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b9hnrnnmu.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="b9hnrnnmu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:propane-tank-with-gas-flame"} {...others} />);
}

export default Component;
