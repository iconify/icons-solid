import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oocfn2e4j.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="oocfn2e4j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:alpha-h-fill"} {...others} />);
}

export default Component;
