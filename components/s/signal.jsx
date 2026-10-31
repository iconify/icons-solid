import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/s/sjxgbg2th.css';
import '../../css/t/tf3n6m1cy.css';
import '../../css/l/ljhemfwhz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="sjxgbg2th wm-shadow"/><path class="tf3n6m1cy wm-shadow"/><path class="ljhemfwhz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:signal"} {...others} />);
}

export default Component;
