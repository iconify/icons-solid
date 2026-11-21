import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jxomvab2t.css';
import '../../css/a/abbplybds.css';
import '../../css/e/eupxy9tmv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jxomvab2t"/><path class="abbplybds"/><path class="eupxy9tmv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:cloud-sync-filled"} {...others} />);
}

export default Component;
