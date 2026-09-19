import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/md4_kyv7l.css';
import '../../css/o/oa3mdsoup.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="duoicon-secondary-layer md4_kyv7l"/><path class="duoicon-primary-layer oa3mdsoup"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"duo-icons:message-3"} {...others} />);
}

export default Component;
