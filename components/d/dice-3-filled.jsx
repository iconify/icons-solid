import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oha6nqbmp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oha6nqbmp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:dice-3-filled"} {...others} />);
}

export default Component;
