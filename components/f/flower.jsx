import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/eouu22b6c.css';
import '../../css/a/aou2kplme.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="eouu22b6c"/><path class="aou2kplme"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:flower"} {...others} />);
}

export default Component;
