import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dx397ftkb.css';
import '../../css/f/f5qfwg_tr.css';
import '../../css/t/tmbckpbip.css';
import '../../css/u/u9j3mpbmw.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="dx397ftkb"/><circle class="f5qfwg_tr"/><path class="tmbckpbip"/><path class="u9j3mpbmw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:warning-multiple"} {...others} />);
}

export default Component;
