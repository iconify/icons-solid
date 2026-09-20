import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fn_mmh6jh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fn_mmh6jh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:folder-hash-outline"} {...others} />);
}

export default Component;
