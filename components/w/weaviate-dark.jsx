import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r2rhl-nvq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="r2rhl-nvq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:weaviate-dark"} {...others} />);
}

export default Component;
