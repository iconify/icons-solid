import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/szv9ucwib.css';
import '../../css/x/xenb14b2g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="szv9ucwib"/><path class="xenb14b2g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:home-security-lock-fill"} {...others} />);
}

export default Component;
