import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9ofttbku.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="s9ofttbku"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:chart-bar"} {...others} />);
}

export default Component;
