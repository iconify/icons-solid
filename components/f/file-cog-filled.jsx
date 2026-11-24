import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c4akmytgw.css';
import '../../css/u/uojfr4gpw.css';
import '../../css/r/rb_4au9oc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c4akmytgw"/><path clip-rule="evenodd" class="uojfr4gpw"/><path class="rb_4au9oc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:file-cog-filled"} {...others} />);
}

export default Component;
