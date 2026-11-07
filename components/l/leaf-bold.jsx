import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wbvmhfb9a.css';
import '../../css/e/ete-qkfso.css';
import '../../css/a/adiss9bph.css';
import '../../css/y/y32pobbgx.css';
import '../../css/x/xzy08hf3x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wbvmhfb9a"/><path class="ete-qkfso"/><path class="adiss9bph"/><path class="y32pobbgx"/><path class="xzy08hf3x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:leaf-bold"} {...others} />);
}

export default Component;
