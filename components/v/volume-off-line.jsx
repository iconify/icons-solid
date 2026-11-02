import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k8nz2m9bq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k8nz2m9bq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:volume-off-line"} {...others} />);
}

export default Component;
