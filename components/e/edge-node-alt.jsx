import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m3aaqabzw.css';
import '../../css/t/tl0s0vbfd.css';
import '../../css/o/o-jkj3has.css';
import '../../css/h/hn160mbff.css';
import '../../css/z/zd7flj3zb.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="m3aaqabzw"/><circle class="tl0s0vbfd"/><circle class="o-jkj3has"/><circle class="hn160mbff"/><path class="zd7flj3zb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:edge-node-alt"} {...others} />);
}

export default Component;
