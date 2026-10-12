import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vqkha6bxo.css';
import '../../css/z/zplth4i-g.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="vqkha6bxo"/><path class="zplth4i-g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:person-check-stroke-20"} {...others} />);
}

export default Component;
