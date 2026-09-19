import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kcn2q1bcp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kcn2q1bcp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:migrate-for-anthos"} {...others} />);
}

export default Component;
