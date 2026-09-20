import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/trwtybczh.css';
import '../../css/s/s39r46bkt.css';
import '../../css/h/hoofw7boh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="trwtybczh"/><path class="s39r46bkt"/><path class="hoofw7boh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:fio"} {...others} />);
}

export default Component;
