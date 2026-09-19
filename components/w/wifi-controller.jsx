import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wyr___g3f.css';
import '../../css/d/dfv392bxj.css';
import '../../css/o/osrg4ib8c.css';
import '../../css/f/f3ilqbcpe.css';
import '../../css/x/xqwg8m_7k.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="wyr___g3f"/><circle class="dfv392bxj"/><circle class="osrg4ib8c"/><path class="f3ilqbcpe"/><path class="xqwg8m_7k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:wifi-controller"} {...others} />);
}

export default Component;
