import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bj8kg5b4r.css';

const viewBox = {"width":1200,"height":1200};
const content = `<path class="bj8kg5b4r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"el:address-book"} {...others} />);
}

export default Component;
