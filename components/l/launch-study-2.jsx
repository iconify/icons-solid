import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zr18iotvw.css';
import '../../css/d/dxd4apb8s.css';
import '../../css/o/ol-mkhbiz.css';
import '../../css/r/r97skqbij.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="zr18iotvw"/><path class="dxd4apb8s"/><path class="ol-mkhbiz"/><path class="r97skqbij"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:launch-study-2"} {...others} />);
}

export default Component;
