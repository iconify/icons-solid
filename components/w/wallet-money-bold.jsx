import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b--gob6xd.css';
import '../../css/s/siuvu-jzd.css';
import '../../css/r/r377frbsh.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="b--gob6xd"/><path clip-rule="evenodd" class="siuvu-jzd"/><path class="r377frbsh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:wallet-money-bold"} {...others} />);
}

export default Component;
