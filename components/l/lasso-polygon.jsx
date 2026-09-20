import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tu5q5obme.css';
import '../../css/f/f2ny9eb9g.css';
import '../../css/c/c00zy4e0t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="tu5q5obme"/><path class="f2ny9eb9g"/><path class="c00zy4e0t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:lasso-polygon"} {...others} />);
}

export default Component;
