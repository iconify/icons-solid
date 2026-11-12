import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jg_nm4bfn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jg_nm4bfn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:link-exclamation"} {...others} />);
}

export default Component;
