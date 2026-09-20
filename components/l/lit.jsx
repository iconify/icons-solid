import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lurbt5era.css';
import '../../css/l/layi-mb4r.css';
import '../../css/k/ks9c86i1m.css';
import '../../css/c/cwafcrynf.css';

const viewBox = {"width":256,"height":320};
const content = `<path class="lurbt5era"/><path class="layi-mb4r"/><path class="ks9c86i1m"/><path class="cwafcrynf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:lit"} {...others} />);
}

export default Component;
