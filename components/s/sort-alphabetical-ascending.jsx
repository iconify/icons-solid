import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/txe6li42a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="txe6li42a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:sort-alphabetical-ascending"} {...others} />);
}

export default Component;
