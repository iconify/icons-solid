import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p48dyi2lt.css';
import '../../css/e/emos5l7br.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p48dyi2lt"/><path class="emos5l7br"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:check-square"} {...others} />);
}

export default Component;
