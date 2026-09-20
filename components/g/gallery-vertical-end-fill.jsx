import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a65dndbws.css';
import '../../css/b/btw_rsbbl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="a65dndbws"/><path class="btw_rsbbl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:gallery-vertical-end-fill"} {...others} />);
}

export default Component;
