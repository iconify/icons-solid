import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sunnwjbfh.css';
import '../../css/s/sn5sf53te.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sunnwjbfh"/><path class="sn5sf53te"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:virtual-guest"} {...others} />);
}

export default Component;
