import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c4akmytgw.css';
import '../../css/y/yg7brjbpd.css';
import '../../css/n/nq41ynbwe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c4akmytgw"/><path clip-rule="evenodd" class="yg7brjbpd"/><path class="nq41ynbwe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:file-cog-filled"} {...others} />);
}

export default Component;
