import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e7mha9bmm.css';
import '../../css/e/einl4h1qq.css';
import '../../css/a/a-5q5tb7j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e7mha9bmm"/><path class="einl4h1qq"/><path class="a-5q5tb7j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:firestore"} {...others} />);
}

export default Component;
