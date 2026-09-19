import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/igqmfsbkx.css';

const viewBox = {"width":2656,"height":2080};
const content = `<path class="igqmfsbkx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vs:male-female"} {...others} />);
}

export default Component;
