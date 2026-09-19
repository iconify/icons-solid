import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hq_ak0bad.css';
import '../../css/v/v03ymlbsg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hq_ak0bad"/><path class="v03ymlbsg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:trash"} {...others} />);
}

export default Component;
