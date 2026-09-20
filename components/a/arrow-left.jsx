import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gjlzt-g3f.css';
import '../../css/t/t5c3kxbue.css';

const viewBox = {"width":40,"height":40};
const content = `<path class="gjlzt-g3f"/><path class="t5c3kxbue"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iwwa:arrow-left"} {...others} />);
}

export default Component;
