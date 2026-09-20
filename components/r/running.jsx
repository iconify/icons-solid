import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zu2o_0bsx.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="zu2o_0bsx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:running"} {...others} />);
}

export default Component;
