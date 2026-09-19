import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hoa0fbuwz.css';
import '../../css/o/o7khdv3bk.css';
import '../../css/h/hr3wh0b3g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hoa0fbuwz"/><circle class="o7khdv3bk"/><path class="hr3wh0b3g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:circle-info"} {...others} />);
}

export default Component;
