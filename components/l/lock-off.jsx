import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nxnw64b0f.css';
import '../../css/j/jk52f3osi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="nxnw64b0f"/><path class="jk52f3osi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:lock-off"} {...others} />);
}

export default Component;
