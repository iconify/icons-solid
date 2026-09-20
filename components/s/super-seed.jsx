import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/ssdxi2bok.css';
import '../../css/b/b2qgwseyp.css';
import '../../css/l/lqp4slntg.css';
import '../../css/a/a9osemp6h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ssdxi2bok"/><path class="b2qgwseyp"/><path class="lqp4slntg"/><path clip-rule="evenodd" class="a9osemp6h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:super-seed"} {...others} />);
}

export default Component;
