import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x6zh5ebzg.css';
import '../../css/c/ctmkibhti.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="x6zh5ebzg"/><path class="ctmkibhti"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-block:content-cut"} {...others} />);
}

export default Component;
