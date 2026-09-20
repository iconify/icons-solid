import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c0j7exohw.css';
import '../../css/z/zpv0rcqaw.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="c0j7exohw"/><path class="zpv0rcqaw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:ecology-windmill-2"} {...others} />);
}

export default Component;
