import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k8ys20bqs.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="k8ys20bqs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:tram-with-pantograph-on-tram-track"} {...others} />);
}

export default Component;
