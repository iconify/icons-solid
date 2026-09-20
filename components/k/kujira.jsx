import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sy7nfem9n.css';
import '../../css/w/wgkp86hhr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sy7nfem9n"/><path class="wgkp86hhr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:kujira"} {...others} />);
}

export default Component;
