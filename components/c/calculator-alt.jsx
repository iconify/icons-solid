import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nvkz25b3t.css';

const viewBox = {"width":64,"height":64};
const content = `<path clip-rule="evenodd" class="nvkz25b3t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:calculator-alt"} {...others} />);
}

export default Component;
