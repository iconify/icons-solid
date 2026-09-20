import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v6-j7ubto.css';
import '../../css/n/njy7e9b_b.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="v6-j7ubto"/><path class="njy7e9b_b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:openuem-light"} {...others} />);
}

export default Component;
