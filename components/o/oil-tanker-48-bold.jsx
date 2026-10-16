import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l6fk-hbzz.css';
import '../../css/h/h92n3z2qg.css';
import '../../css/i/im5n_6bkh.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="l6fk-hbzz"/><path class="h92n3z2qg"/><path class="im5n_6bkh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:oil-tanker-48-bold"} {...others} />);
}

export default Component;
