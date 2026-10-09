import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n7gs-30zl.css';
import '../../css/h/h-sadvblf.css';
import '../../css/s/spu04ibth.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="n7gs-30zl"/><path class="h-sadvblf"/><path class="spu04ibth"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:kite-48"} {...others} />);
}

export default Component;
