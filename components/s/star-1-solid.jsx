import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b-5g7ib6k.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="b-5g7ib6k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:star-1-solid"} {...others} />);
}

export default Component;
