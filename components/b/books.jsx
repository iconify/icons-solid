import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x9lilrbsn.css';
import '../../css/b/bdbim-l5v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="x9lilrbsn"/><path class="bdbim-l5v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"meteor-icons:books"} {...others} />);
}

export default Component;
