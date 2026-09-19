import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yt0e9abyt.css';
import '../../css/d/dijmg4j3t.css';
import '../../css/x/x8-393b-u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yt0e9abyt"/><circle class="dijmg4j3t"/><path class="x8-393b-u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxl-instagram"} {...others} />);
}

export default Component;
