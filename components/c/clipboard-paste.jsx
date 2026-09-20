import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/f1f6jqjto.css';
import '../../css/n/ngy432bhd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="f1f6jqjto"/><path class="ngy432bhd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:clipboard-paste"} {...others} />);
}

export default Component;
