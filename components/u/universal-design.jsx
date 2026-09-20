import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kb8k_1dbx.css';
import '../../css/k/k9ywmeb8i.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="kb8k_1dbx"/><circle class="k9ywmeb8i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:universal-design"} {...others} />);
}

export default Component;
