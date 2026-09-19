import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rinuwhlnp.css';
import '../../css/i/ivq8eifjo.css';
import '../../css/k/k0q4p2byh.css';
import '../../css/o/oigysqpni.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rinuwhlnp"><path class="ivq8eifjo"/><path class="k0q4p2byh"/><path class="oigysqpni"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:bydesign"} {...others} />);
}

export default Component;
