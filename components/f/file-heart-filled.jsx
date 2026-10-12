import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cb4svm1zh.css';
import '../../css/s/s3-i80dqa.css';
import '../../css/k/ks00dfbiu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cb4svm1zh"/><path class="s3-i80dqa"/><path class="ks00dfbiu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:file-heart-filled"} {...others} />);
}

export default Component;
