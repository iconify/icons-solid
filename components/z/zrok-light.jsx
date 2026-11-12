import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nn7gr5tgt.css';
import '../../css/j/jm_1qebhn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nn7gr5tgt"/><path class="jm_1qebhn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:zrok-light"} {...others} />);
}

export default Component;
