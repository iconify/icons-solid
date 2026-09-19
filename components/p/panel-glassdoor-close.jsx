import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/msa_hlb-i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="msa_hlb-i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:panel-glassdoor-close"} {...others} />);
}

export default Component;
