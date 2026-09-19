import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/scn8kmb6b.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="scn8kmb6b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:down-to-bottom"} {...others} />);
}

export default Component;
