import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z9cib2wjc.css';
import '../../css/r/reay3euxf.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="z9cib2wjc"/><path class="reay3euxf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:investment"} {...others} />);
}

export default Component;
