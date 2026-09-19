import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ojtv12bfi.css';
import '../../css/b/b2qas0b1a.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ojtv12bfi"/><path class="b2qas0b1a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:accumulation-ice"} {...others} />);
}

export default Component;
