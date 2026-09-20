import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x5-y49b9d.css';
import '../../css/b/bu7krvb8k.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="x5-y49b9d"/><path clip-rule="evenodd" class="bu7krvb8k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:task-past-16"} {...others} />);
}

export default Component;
