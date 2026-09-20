import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gnn6g-38f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gnn6g-38f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:home-lightning-bolt-outline"} {...others} />);
}

export default Component;
