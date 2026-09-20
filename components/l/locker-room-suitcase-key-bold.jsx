import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tnrexiitu.css';
import '../../css/h/hzmc-yyoj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tnrexiitu"/><path class="hzmc-yyoj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:locker-room-suitcase-key-bold"} {...others} />);
}

export default Component;
