import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pq4y6eb-r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pq4y6eb-r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:file-document-box-tick"} {...others} />);
}

export default Component;
