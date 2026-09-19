import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p6cki_2wy.css';
import '../../css/x/x2dxx-bdb.css';
import '../../css/z/zeckvdf7a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="duoicon-secondary-layer p6cki_2wy"/><path class="duoicon-primary-layer x2dxx-bdb"/><path class="duoicon-secondary-layer zeckvdf7a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"duo-icons:palette"} {...others} />);
}

export default Component;
