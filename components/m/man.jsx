import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/skhce2wwk.css';

const viewBox = {"width":256,"height":512};
const content = `<path class="skhce2wwk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:man"} {...others} />);
}

export default Component;
