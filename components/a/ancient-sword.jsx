import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x6wpg2e-t.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="x6wpg2e-t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:ancient-sword"} {...others} />);
}

export default Component;
