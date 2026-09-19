import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q5fqy9gnu.css';
import '../../css/n/n9df1ve4c.css';
import '../../css/p/pi5jgob2x.css';
import '../../css/s/seim7uvii.css';
import '../../css/k/kho6i_baw.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="q5fqy9gnu"/><path clip-rule="evenodd" class="n9df1ve4c"/><path clip-rule="evenodd" class="pi5jgob2x"/><path clip-rule="evenodd" class="seim7uvii"/><path clip-rule="evenodd" class="kho6i_baw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:move-outline"} {...others} />);
}

export default Component;
