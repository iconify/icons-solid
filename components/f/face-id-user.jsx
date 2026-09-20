import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fvt9swbvw.css';
import '../../css/z/zzlsuxo-a.css';
import '../../css/f/fd5mkxbsa.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="fvt9swbvw"/><path class="zzlsuxo-a"/><path class="fd5mkxbsa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:face-id-user"} {...others} />);
}

export default Component;
