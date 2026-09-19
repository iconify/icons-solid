import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ybjym5b1h.css';
import '../../css/b/bjzsqyhqp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="duoicon-secondary-layer ybjym5b1h"/><path class="bjzsqyhqp duoicon-primary-layer"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"duo-icons:bell-badge"} {...others} />);
}

export default Component;
