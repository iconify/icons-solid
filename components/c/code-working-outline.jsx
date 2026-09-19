import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vuejpjjmz.css';
import '../../css/b/be4ff7bzh.css';
import '../../css/z/zhu4enjix.css';
import '../../css/u/u2bhkjb4b.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="vuejpjjmz"/><circle class="be4ff7bzh"/><circle class="zhu4enjix"/><path class="u2bhkjb4b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:code-working-outline"} {...others} />);
}

export default Component;
