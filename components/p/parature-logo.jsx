import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/df1l_fhyy.css';

const viewBox = {"width":2048,"height":2048};
const content = `<path class="df1l_fhyy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-mdl2:parature-logo"} {...others} />);
}

export default Component;
