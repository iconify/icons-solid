import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/domlw-b2t.css';

const viewBox = {"width":580,"height":580};
const content = `<path class="domlw-b2t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:ragas"} {...others} />);
}

export default Component;
