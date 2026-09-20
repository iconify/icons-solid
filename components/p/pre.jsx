import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dw77q9osv.css';
import '../../css/o/of9-d-bos.css';
import '../../css/x/xuxccbbil.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dw77q9osv"/><path class="of9-d-bos"/><path class="xuxccbbil"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:pre"} {...others} />);
}

export default Component;
