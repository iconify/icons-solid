import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fljd5rbvi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fljd5rbvi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:aeroplane-fill"} {...others} />);
}

export default Component;
