import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jlmu-owkj.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="jlmu-owkj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:filter-alt-4"} {...others} />);
}

export default Component;
