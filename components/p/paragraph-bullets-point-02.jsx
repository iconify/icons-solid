import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/oe7vz9bcj.css';
import '../../css/t/t-7lz5bmz.css';
import '../../css/y/yphewc7qd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="oe7vz9bcj"/><circle class="t-7lz5bmz"/><circle class="yphewc7qd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:paragraph-bullets-point-02"} {...others} />);
}

export default Component;
