import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/os8safvnw.css';
import '../../css/t/tbx9ltbbh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="os8safvnw"/><path class="tbx9ltbbh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:split"} {...others} />);
}

export default Component;
