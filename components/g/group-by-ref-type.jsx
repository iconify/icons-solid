import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tmk6lwbpc.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="tmk6lwbpc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:group-by-ref-type"} {...others} />);
}

export default Component;
