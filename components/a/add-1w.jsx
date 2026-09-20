import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v6fe3tb3a.css';
import '../../css/j/jt3ln0bet.css';

const viewBox = {"width":40,"height":40};
const content = `<path class="v6fe3tb3a"/><path class="jt3ln0bet"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iwwa:add-1w"} {...others} />);
}

export default Component;
