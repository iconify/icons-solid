import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/v/v6khnyleh.css';
import '../../css/a/akx8k_ksi.css';
import '../../css/t/tyeinvzew.css';
import '../../css/u/u-ihp7bya.css';
import '../../css/n/njoohdc3v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="v6khnyleh"/><path class="akx8k_ksi"/><path class="tyeinvzew"/><path class="u-ihp7bya"/><path class="njoohdc3v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:postman-1"} {...others} />);
}

export default Component;
