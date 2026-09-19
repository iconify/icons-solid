import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nmevdnb3h.css';
import '../../css/b/bw323sqaj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nmevdnb3h"/><path class="bw323sqaj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:city"} {...others} />);
}

export default Component;
