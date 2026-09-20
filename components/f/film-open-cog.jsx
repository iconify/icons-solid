import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sm9jy4ulr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sm9jy4ulr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:film-open-cog"} {...others} />);
}

export default Component;
