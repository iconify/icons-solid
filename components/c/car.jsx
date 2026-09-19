import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nwxp4tvzv.css';
import '../../css/d/dyto25hnh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="duoicon-secondary-layer nwxp4tvzv"/><path class="duoicon-primary-layer dyto25hnh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"duo-icons:car"} {...others} />);
}

export default Component;
