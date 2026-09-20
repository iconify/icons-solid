import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/d/d2uni5b8r.css';
import '../../css/a/aw3qdpbef.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><rect class="d2uni5b8r"/><path class="aw3qdpbef"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:desk"} {...others} />);
}

export default Component;
