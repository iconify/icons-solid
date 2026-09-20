import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/clr0thirl.css';
import '../../css/c/ci_39onbj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="clr0thirl"/><path class="ci_39onbj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:wechat"} {...others} />);
}

export default Component;
