import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aqr4zbbdb.css';
import '../../css/k/kmp8rebtm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="aqr4zbbdb"/><path class="kmp8rebtm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:coin-b-fill"} {...others} />);
}

export default Component;
