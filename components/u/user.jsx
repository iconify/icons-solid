import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s_jmlxnvx.css';
import '../../css/m/mza_fjbph.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="duoicon-primary-layer s_jmlxnvx"/><path class="duoicon-secondary-layer mza_fjbph"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"duo-icons:user"} {...others} />);
}

export default Component;
