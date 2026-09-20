import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/td4qobc7z.css';
import '../../css/z/z3jcjnr1k.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="td4qobc7z"/><path class="z3jcjnr1k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:restaurant"} {...others} />);
}

export default Component;
