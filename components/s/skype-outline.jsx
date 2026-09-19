import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nnana9thp.css';
import '../../css/h/hpjr1hd0g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nnana9thp"/><path clip-rule="evenodd" class="hpjr1hd0g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:skype-outline"} {...others} />);
}

export default Component;
