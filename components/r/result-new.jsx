import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufs9gw4qw.css';
import '../../css/l/llw25qk2j.css';
import '../../css/x/xgq8btbrg.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="ufs9gw4qw"/><path class="llw25qk2j"/><path class="xgq8btbrg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:result-new"} {...others} />);
}

export default Component;
