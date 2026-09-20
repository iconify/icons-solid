import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cgemnd1nq.css';

const viewBox = {"width":50,"height":50};
const content = `<circle class="cgemnd1nq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"map:circle"} {...others} />);
}

export default Component;
