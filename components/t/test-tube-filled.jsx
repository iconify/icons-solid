import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x__nbyi8f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x__nbyi8f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:test-tube-filled"} {...others} />);
}

export default Component;
