import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s24s3go5f.css';
import '../../css/a/aba_xubdq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s24s3go5f"/><path class="aba_xubdq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:monitor-dot-filled"} {...others} />);
}

export default Component;
