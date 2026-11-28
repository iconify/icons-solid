import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lkgs06hvj.css';
import '../../css/s/selc8tm1k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lkgs06hvj secondary"/><path class="primary selc8tm1k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:cloud-duo"} {...others} />);
}

export default Component;
