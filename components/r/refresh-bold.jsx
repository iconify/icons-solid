import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rdf92f1xn.css';
import '../../css/b/b3iiu6hfl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rdf92f1xn"/><path class="b3iiu6hfl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:refresh-bold"} {...others} />);
}

export default Component;
