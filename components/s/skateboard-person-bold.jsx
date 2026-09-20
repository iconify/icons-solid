import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y_w4jxb3q.css';
import '../../css/r/r1jer6arw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y_w4jxb3q"/><path class="r1jer6arw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:skateboard-person-bold"} {...others} />);
}

export default Component;
