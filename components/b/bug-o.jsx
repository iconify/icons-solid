import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/csnou1l8n.css';
import '../../css/z/z6oybf-di.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="csnou1l8n"/><path class="z6oybf-di"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:bug-o"} {...others} />);
}

export default Component;
