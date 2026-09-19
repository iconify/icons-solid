import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xsd2o4b_k.css';
import '../../css/p/pchs25bqq.css';
import '../../css/j/jfy6s3bwq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="xsd2o4b_k"/><path class="pchs25bqq"/><path class="jfy6s3bwq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:delivery-free-duotone"} {...others} />);
}

export default Component;
