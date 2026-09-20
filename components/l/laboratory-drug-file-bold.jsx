import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mhtvc5bfh.css';
import '../../css/w/wkehg6b9s.css';
import '../../css/v/vi7gv51nc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mhtvc5bfh"/><path class="wkehg6b9s"/><path class="vi7gv51nc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:laboratory-drug-file-bold"} {...others} />);
}

export default Component;
