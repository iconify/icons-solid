import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz7xlfb-v.css';
import '../../css/b/bbq8uabvg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nz7xlfb-v"/><path class="bbq8uabvg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:database-zap-filled"} {...others} />);
}

export default Component;
