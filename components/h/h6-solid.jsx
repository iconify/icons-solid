import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r9eiabb0x.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="r9eiabb0x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:h6-solid"} {...others} />);
}

export default Component;
