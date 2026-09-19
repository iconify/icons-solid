import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s99ga2boz.css';
import '../../css/m/maw0v5bht.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="duoicon-secondary-layer s99ga2boz"/><path class="duoicon-primary-layer maw0v5bht"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"duo-icons:chip"} {...others} />);
}

export default Component;
