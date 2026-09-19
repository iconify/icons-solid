import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/ds3ie1b0o.css';
import '../../css/n/n8kf28bbi.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVGRVeuBdhT)"><path clip-rule="evenodd" class="ds3ie1b0o"/></g><defs><clipPath id="SVGRVeuBdhT"><path class="n8kf28bbi"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:pulse"} {...others} />);
}

export default Component;
