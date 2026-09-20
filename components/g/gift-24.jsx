import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tftyg4b2k.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="tftyg4b2k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:gift-24"} {...others} />);
}

export default Component;
