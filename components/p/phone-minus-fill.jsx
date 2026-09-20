import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zamd5-oru.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zamd5-oru"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:phone-minus-fill"} {...others} />);
}

export default Component;
