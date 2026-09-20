import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b-de8abbo.css';
import '../../css/t/ti6hml45y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="b-de8abbo"/><ellipse class="ti6hml45y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:cone"} {...others} />);
}

export default Component;
