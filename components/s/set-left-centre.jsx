import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ownzj_vcj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ownzj_vcj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:set-left-centre"} {...others} />);
}

export default Component;
