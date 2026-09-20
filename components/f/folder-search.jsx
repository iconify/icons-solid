import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eo0xyvbqi.css';
import '../../css/g/g5pmz6bgx.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="eo0xyvbqi"/><path class="g5pmz6bgx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:folder-search"} {...others} />);
}

export default Component;
