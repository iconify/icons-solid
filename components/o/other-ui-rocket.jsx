import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gm8yzh27k.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="gm8yzh27k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-block:other-ui-rocket"} {...others} />);
}

export default Component;
