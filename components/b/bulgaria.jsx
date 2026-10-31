import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rj9cgxb4q.css';
import '../../css/w/wprsklb5k.css';
import '../../css/b/bupxdcvvv.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="rj9cgxb4q"/><path class="wprsklb5k"/><path class="bupxdcvvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:bulgaria"} {...others} />);
}

export default Component;
