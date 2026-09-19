import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dxrvpzbit.css';
import '../../css/o/ob_nbubvj.css';
import '../../css/s/svdy80z7e.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="dxrvpzbit"/><circle class="ob_nbubvj"/><path class="svdy80z7e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:accessibility-alt"} {...others} />);
}

export default Component;
