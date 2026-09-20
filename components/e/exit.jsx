import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wjk7blide.css';
import '../../css/t/tfmdi36dd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wjk7blide"/><path class="tfmdi36dd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:exit"} {...others} />);
}

export default Component;
