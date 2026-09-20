import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/okeha2n_r.css';
import '../../css/e/e8h9khb5x.css';
import '../../css/q/quzt27byr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="okeha2n_r"/><path class="e8h9khb5x"/><path class="quzt27byr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:gswift"} {...others} />);
}

export default Component;
