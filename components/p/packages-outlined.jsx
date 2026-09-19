import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a78ikzb1o.css';
import '../../css/z/zr6-qibes.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a78ikzb1o"/><path class="zr6-qibes"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:packages-outlined"} {...others} />);
}

export default Component;
