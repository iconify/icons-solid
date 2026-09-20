import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/w/wtzf3ijxf.css';
import '../../css/g/glxlq0-cy.css';
import '../../css/s/sygjb24yx.css';
import '../../css/u/u7snxmbok.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="pr52f_b5y"><path class="wtzf3ijxf"/><path class="glxlq0-cy"/><path class="sygjb24yx"/><ellipse class="u7snxmbok"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:ghost-smile-line-duotone"} {...others} />);
}

export default Component;
