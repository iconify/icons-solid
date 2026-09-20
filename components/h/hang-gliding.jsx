import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n3-5arf6n.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="n3-5arf6n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:hang-gliding"} {...others} />);
}

export default Component;
