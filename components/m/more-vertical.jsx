import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vj9wcwbzj.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="vj9wcwbzj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:more-vertical"} {...others} />);
}

export default Component;
