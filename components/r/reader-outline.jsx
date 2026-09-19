import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vyolq2bek.css';
import '../../css/j/jo-7oophi.css';

const viewBox = {"width":512,"height":512};
const content = `<rect class="vyolq2bek"/><path class="jo-7oophi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:reader-outline"} {...others} />);
}

export default Component;
