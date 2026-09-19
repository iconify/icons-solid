import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/osbn5umaf.css';

const viewBox = {"width":32,"height":24};
const content = `<path class="osbn5umaf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:area-chart"} {...others} />);
}

export default Component;
