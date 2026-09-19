import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zl-nlrbcy.css';
import '../../css/t/tbhil46-f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zl-nlrbcy"/><path class="tbhil46-f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:error"} {...others} />);
}

export default Component;
