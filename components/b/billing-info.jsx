import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ofqcakjlm.css';
import '../../css/l/lr1fnhkrm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ofqcakjlm"/><path class="lr1fnhkrm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:billing-info"} {...others} />);
}

export default Component;
