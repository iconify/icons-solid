import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/md4nzgbup.css';
import '../../css/e/e41hepbqx.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="md4nzgbup"/><path class="e41hepbqx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:golf-20"} {...others} />);
}

export default Component;
