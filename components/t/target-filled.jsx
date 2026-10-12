import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufmb-0o7z.css';
import '../../css/t/tnufrjb2z.css';
import '../../css/f/f2gaakbew.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ufmb-0o7z"/><path clip-rule="evenodd" class="tnufrjb2z"/><path clip-rule="evenodd" class="f2gaakbew"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:target-filled"} {...others} />);
}

export default Component;
