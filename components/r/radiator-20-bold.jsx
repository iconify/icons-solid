import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mqc5wb6qw.css';
import '../../css/s/s4umu5bdx.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="mqc5wb6qw"/><path class="s4umu5bdx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:radiator-20-bold"} {...others} />);
}

export default Component;
