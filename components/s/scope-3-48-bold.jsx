import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/seoan67mj.css';
import '../../css/a/a6fdyxb1j.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="seoan67mj"/><path class="a6fdyxb1j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:scope-3-48-bold"} {...others} />);
}

export default Component;
