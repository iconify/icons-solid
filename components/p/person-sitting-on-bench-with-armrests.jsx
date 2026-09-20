import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a17i5e9cv.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="a17i5e9cv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:person-sitting-on-bench-with-armrests"} {...others} />);
}

export default Component;
