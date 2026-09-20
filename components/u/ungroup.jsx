import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x1ja5160x.css';
import '../../css/n/no846196a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="x1ja5160x"/><rect class="no846196a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:ungroup"} {...others} />);
}

export default Component;
