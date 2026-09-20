import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nn74v6bbn.css';
import '../../css/j/jjvt2sqaa.css';
import '../../css/c/cvu64vbfn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nn74v6bbn"/><path class="jjvt2sqaa"/><path class="cvu64vbfn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:compass-duotone"} {...others} />);
}

export default Component;
