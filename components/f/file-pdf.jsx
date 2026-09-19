import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/updz07b-a.css';
import '../../css/g/g8ph7i0bc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="updz07b-a"/><path class="g8ph7i0bc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:file-pdf"} {...others} />);
}

export default Component;
