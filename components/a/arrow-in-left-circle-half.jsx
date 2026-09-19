import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y5-5xebiw.css';
import '../../css/z/z7ybbhltq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y5-5xebiw"/><path class="z7ybbhltq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:arrow-in-left-circle-half"} {...others} />);
}

export default Component;
