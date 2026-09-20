import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jzr61tbtm.css';
import '../../css/d/d-6vdibyb.css';
import '../../css/y/yb06lccjp.css';
import '../../css/t/tcn-xl5yi.css';
import '../../css/x/xiamkcxub.css';
import '../../css/y/yqfxoj6jk.css';
import '../../css/h/h53c51bzl.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="jzr61tbtm"/><path class="d-6vdibyb"/><path class="yb06lccjp"/><path class="tcn-xl5yi"/><path class="xiamkcxub"/><path class="yqfxoj6jk"/><path class="h53c51bzl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:hadolint"} {...others} />);
}

export default Component;
