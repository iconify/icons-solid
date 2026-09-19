import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v_jz1gb1w.css';

const viewBox = {"width":2016,"height":2048};
const content = `<path class="v_jz1gb1w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vs:sheep"} {...others} />);
}

export default Component;
