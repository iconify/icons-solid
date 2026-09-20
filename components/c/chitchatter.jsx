import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jzot9ebny.css';
import '../../css/e/eexszhbnn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jzot9ebny"/><path class="eexszhbnn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:chitchatter"} {...others} />);
}

export default Component;
