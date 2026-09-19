import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k188_sbpi.css';
import '../../css/f/f7bma5brt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k188_sbpi"/><circle class="f7bma5brt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:security-command-center"} {...others} />);
}

export default Component;
