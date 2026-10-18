import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b3ue-ubdv.css';
import '../../css/f/fsg-qo40i.css';
import '../../css/k/kyhfpkiin.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="b3ue-ubdv"/><path class="fsg-qo40i"/><path class="kyhfpkiin"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:image"} {...others} />);
}

export default Component;
