import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cxnb46bqn.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="cxnb46bqn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icomoon-free:radio-unchecked"} {...others} />);
}

export default Component;
