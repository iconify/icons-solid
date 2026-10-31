import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gc45ihbxn.css';
import '../../css/u/ury05spjj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="gc45ihbxn"/><path class="ury05spjj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:banknote-duocolor-round"} {...others} />);
}

export default Component;
