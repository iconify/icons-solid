import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fjc8p761n.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="fjc8p761n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:phone-call-transfer-only-stroke-16"} {...others} />);
}

export default Component;
