import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ne1znnadb.css';
import '../../css/g/gkei3cclt.css';
import '../../css/v/vsiwl0bxq.css';
import '../../css/t/t4js61brz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ne1znnadb"/><path class="gkei3cclt"/><path class="vsiwl0bxq"/><path class="t4js61brz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:beachball-fill"} {...others} />);
}

export default Component;
