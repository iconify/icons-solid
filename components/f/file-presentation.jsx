import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pbigfv4ml.css';
import '../../css/x/xi9vqyepo.css';
import '../../css/e/ey3ijkbgy.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="pbigfv4ml"/><path class="xi9vqyepo"/><path class="ey3ijkbgy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:file-presentation"} {...others} />);
}

export default Component;
