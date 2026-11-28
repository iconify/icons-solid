import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dm5fw8qnf.css';
import '../../css/s/sd92k-bou.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dm5fw8qnf secondary"/><path class="primary sd92k-bou"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:number-8-duo"} {...others} />);
}

export default Component;
