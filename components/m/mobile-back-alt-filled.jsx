import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rbhnw7wcs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rbhnw7wcs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:mobile-back-alt-filled"} {...others} />);
}

export default Component;
