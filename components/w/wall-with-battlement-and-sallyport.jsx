import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j3h0hpbxh.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="j3h0hpbxh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:wall-with-battlement-and-sallyport"} {...others} />);
}

export default Component;
