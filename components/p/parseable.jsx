import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b0p0fbb2l.css';
import '../../css/t/tsx8_8m-w.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="b0p0fbb2l"/><path class="tsx8_8m-w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:parseable"} {...others} />);
}

export default Component;
