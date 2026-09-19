import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/net7_3qre.css';
import '../../css/n/n8kf28bbi.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVGRVeuBdhT)"><path clip-rule="evenodd" class="net7_3qre"/></g><defs><clipPath id="SVGRVeuBdhT"><path class="n8kf28bbi"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:logo-docker"} {...others} />);
}

export default Component;
