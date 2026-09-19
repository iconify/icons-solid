import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jngw48yvv.css';

const viewBox = {"width":2016,"height":2176};
const content = `<path class="jngw48yvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vs:shield-check"} {...others} />);
}

export default Component;
