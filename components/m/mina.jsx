import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h5_s15unc.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="h5_s15unc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:mina"} {...others} />);
}

export default Component;
