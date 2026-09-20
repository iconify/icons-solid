import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mu25cdcsl.css';
import '../../css/a/af8m14f_t.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="mu25cdcsl"/><path clip-rule="evenodd" class="af8m14f_t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:certificate-16"} {...others} />);
}

export default Component;
