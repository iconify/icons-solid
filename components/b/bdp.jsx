import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o-3k_lb1q.css';
import '../../css/a/a0u305bhu.css';
import '../../css/e/ewy3v6o-c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o-3k_lb1q"/><path class="a0u305bhu"/><path class="ewy3v6o-c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:bdp"} {...others} />);
}

export default Component;
