import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v9dzyiszx.css';
import '../../css/g/g8-7we8zc.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="v9dzyiszx"/><path class="g8-7we8zc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bolt-check-20"} {...others} />);
}

export default Component;
