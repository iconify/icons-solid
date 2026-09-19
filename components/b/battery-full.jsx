import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r9ciw2bty.css';
import '../../css/o/otarylbvq.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="r9ciw2bty"/><path class="otarylbvq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:battery-full"} {...others} />);
}

export default Component;
