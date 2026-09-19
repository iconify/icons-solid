import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x94kw1bph.css';

const viewBox = {"width":336,"height":488};
const content = `<path class="x94kw1bph"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:gowalla"} {...others} />);
}

export default Component;
