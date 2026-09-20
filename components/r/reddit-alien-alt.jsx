import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lsm66sbym.css';
import '../../css/q/qtg25xsmx.css';
import '../../css/n/n7ttdxber.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lsm66sbym"/><path class="qtg25xsmx"/><path class="n7ttdxber"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:reddit-alien-alt"} {...others} />);
}

export default Component;
