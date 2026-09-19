import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nh5uf0c8t.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="nh5uf0c8t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:safety-cone"} {...others} />);
}

export default Component;
