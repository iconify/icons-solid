import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l-pq53bnn.css';
import '../../css/h/hhvthyu9m.css';
import '../../css/m/mi4jrix-s.css';
import '../../css/x/x8poo_bjf.css';
import '../../css/c/cgxswbbyp.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="l-pq53bnn"><circle class="hhvthyu9m"/><path class="mi4jrix-s"/></g><g class="x8poo_bjf"><circle class="hhvthyu9m"/><path class="cgxswbbyp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:person-cartwheeling-medium-light-skin-tone"} {...others} />);
}

export default Component;
