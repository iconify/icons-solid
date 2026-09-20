import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t74qrxbru.css';
import '../../css/k/kw9o2v1zy.css';

const viewBox = {"width":40,"height":40};
const content = `<path class="t74qrxbru"/><path class="kw9o2v1zy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iwwa:edit"} {...others} />);
}

export default Component;
