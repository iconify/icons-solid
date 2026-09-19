import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a9qcqtbkl.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="a9qcqtbkl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cib:gumroad"} {...others} />);
}

export default Component;
