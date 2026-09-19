import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e_zctbc7m.css';
import '../../css/j/jw5g59skx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e_zctbc7m"/><path class="jw5g59skx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:critical-bug-outlined"} {...others} />);
}

export default Component;
