import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b1t-tnykf.css';
import '../../css/z/zxez03plr.css';
import '../../css/c/cb8jqtalf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="b1t-tnykf"/><circle class="zxez03plr"/><path class="cb8jqtalf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"meteor-icons:gumroad"} {...others} />);
}

export default Component;
