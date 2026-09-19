import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/sqi5mdecy.css';
import '../../css/g/gg9oyuvyf.css';
import '../../css/g/gx3tdtbwk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="sqi5mdecy"/><path class="gg9oyuvyf"/><path class="gx3tdtbwk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:share-location-02"} {...others} />);
}

export default Component;
