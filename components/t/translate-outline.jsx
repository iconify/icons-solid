import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/joxurxbtg.css';
import '../../css/p/p0sim5hxc.css';
import '../../css/c/cfmfgyb-p.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="joxurxbtg"/><path clip-rule="evenodd" class="p0sim5hxc"/><path clip-rule="evenodd" class="cfmfgyb-p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:translate-outline"} {...others} />);
}

export default Component;
