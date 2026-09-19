import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u0e143blo.css';

const viewBox = {"width":1632,"height":1792};
const content = `<path class="u0e143blo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:sort-alpha-asc"} {...others} />);
}

export default Component;
