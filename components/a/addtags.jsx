import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qw8djlhdt.css';

const viewBox = {"width":1025,"height":1024};
const content = `<path class="qw8djlhdt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:addtags"} {...others} />);
}

export default Component;
