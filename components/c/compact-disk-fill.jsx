import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nf17_8bfr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nf17_8bfr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:compact-disk-fill"} {...others} />);
}

export default Component;
