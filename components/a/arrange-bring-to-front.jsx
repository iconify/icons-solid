import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/soxy_db2v.css';

const viewBox = {"width":2048,"height":2048};
const content = `<path class="soxy_db2v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-mdl2:arrange-bring-to-front"} {...others} />);
}

export default Component;
