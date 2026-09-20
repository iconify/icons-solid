import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v4fu23kqa.css';
import '../../css/p/p--gbnsrn.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="v4fu23kqa"/><path class="p--gbnsrn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:beauty-mirror-2"} {...others} />);
}

export default Component;
