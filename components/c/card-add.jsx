import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/uh7ju2rpw.css';
import '../../css/l/l6-0iw9fz.css';
import '../../css/h/haaieybaf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="uh7ju2rpw"/><path class="l6-0iw9fz"/><path class="haaieybaf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:card-add"} {...others} />);
}

export default Component;
