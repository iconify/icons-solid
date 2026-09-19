import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s2r13mb9r.css';

const viewBox = {"width":2048,"height":2048};
const content = `<path class="s2r13mb9r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-mdl2:bitbucket-logo-32"} {...others} />);
}

export default Component;
