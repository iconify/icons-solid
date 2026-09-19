import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tqn522bqp.css';
import '../../css/j/jk-9pabkk.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="clr-i-solid--badged clr-i-solid-path-1--badged tqn522bqp"/><circle class="clr-i-badge clr-i-solid--badged clr-i-solid-path-2--badged jk-9pabkk"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:blocks-group-solid-badged"} {...others} />);
}

export default Component;
