import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i2ia5obuy.css';
import '../../css/u/umym_-bpi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i2ia5obuy"/><path clip-rule="evenodd" class="umym_-bpi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:server-outline"} {...others} />);
}

export default Component;
