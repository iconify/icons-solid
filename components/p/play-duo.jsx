import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o1i6nebwi.css';
import '../../css/n/nsykuxbye.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o1i6nebwi secondary"/><path class="nsykuxbye primary"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:play-duo"} {...others} />);
}

export default Component;
