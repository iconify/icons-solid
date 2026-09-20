import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xxw_zcb4b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xxw_zcb4b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:search-expand"} {...others} />);
}

export default Component;
