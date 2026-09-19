import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q-bnw_0yk.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="q-bnw_0yk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:pass-filled"} {...others} />);
}

export default Component;
