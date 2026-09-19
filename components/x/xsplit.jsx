import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fs6y6ggvl.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="fs6y6ggvl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cib:xsplit"} {...others} />);
}

export default Component;
