import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dw69dfdzg.css';
import '../../css/n/nb8b6vbgg.css';
import '../../css/i/i52nyunzx.css';
import '../../css/b/bon82pb8j.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="dw69dfdzg"/><path class="nb8b6vbgg"/><path class="i52nyunzx"/><path class="bon82pb8j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:data-centre-20"} {...others} />);
}

export default Component;
