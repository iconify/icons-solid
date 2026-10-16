import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xb3dnqqxo.css';
import '../../css/c/cds46xnib.css';
import '../../css/n/nvw6mps9q.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="xb3dnqqxo"/><path class="cds46xnib"/><path class="nvw6mps9q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:clipboard-plus-20"} {...others} />);
}

export default Component;
