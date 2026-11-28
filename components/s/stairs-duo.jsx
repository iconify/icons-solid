import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n9dszyztl.css';
import '../../css/b/bxx_4tbiq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n9dszyztl secondary"/><path class="bxx_4tbiq primary"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:stairs-duo"} {...others} />);
}

export default Component;
