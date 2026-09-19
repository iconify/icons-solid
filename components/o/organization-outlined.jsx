import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mi-wf1bll.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mi-wf1bll"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:organization-outlined"} {...others} />);
}

export default Component;
