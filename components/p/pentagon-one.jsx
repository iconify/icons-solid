import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dzkzfxjnb.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="dzkzfxjnb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:pentagon-one"} {...others} />);
}

export default Component;
