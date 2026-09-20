import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kd-eh_bju.css';
import '../../css/s/s5nbh8u_f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kd-eh_bju"/><path class="s5nbh8u_f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:copy-fill"} {...others} />);
}

export default Component;
