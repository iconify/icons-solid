import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yzxqjgbju.css';
import '../../css/o/ozlm6mbor.css';
import '../../css/b/b649fkhgn.css';
import '../../css/g/g8h37j62m.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="yzxqjgbju"/><path class="ozlm6mbor"/><path class="b649fkhgn"/><path class="g8h37j62m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:recycle-20"} {...others} />);
}

export default Component;
