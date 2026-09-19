import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b5eje3big.css';
import '../../css/e/euur1nf0v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="b5eje3big"/><path class="euur1nf0v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"feather:monitor"} {...others} />);
}

export default Component;
