import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n-5h5pbmc.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="n-5h5pbmc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:map-arrow-up"} {...others} />);
}

export default Component;
