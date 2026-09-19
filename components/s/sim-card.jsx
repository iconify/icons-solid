import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eqkctdb_g.css';
import '../../css/c/cvlo2iq2m.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="eqkctdb_g"/><path class="cvlo2iq2m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:sim-card"} {...others} />);
}

export default Component;
