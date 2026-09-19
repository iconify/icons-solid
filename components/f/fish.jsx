import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ik6frwa0u.css';
import '../../css/i/idgsmsbrw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ik6frwa0u"/><path class="idgsmsbrw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:fish"} {...others} />);
}

export default Component;
