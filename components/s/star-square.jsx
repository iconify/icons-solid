import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p-wgyugil.css';
import '../../css/q/qlgozrxrt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p-wgyugil"/><path class="qlgozrxrt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:star-square"} {...others} />);
}

export default Component;
