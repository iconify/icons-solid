import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/z84a-ivde.css';
import '../../css/e/eswlvl1ki.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="z84a-ivde"/><path class="eswlvl1ki"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"struq:video"} {...others} />);
}

export default Component;
