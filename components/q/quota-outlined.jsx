import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g0r9-_bfd.css';
import '../../css/b/bc5_f4bbs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g0r9-_bfd"/><path class="bc5_f4bbs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:quota-outlined"} {...others} />);
}

export default Component;
